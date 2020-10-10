from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from datetime import datetime
from django.utils.text import slugify
from .managers import CustomUserManager

from phonenumber_field.modelfields import PhoneNumberField

class Photos(models.Model):
    ImageField = models.ImageField(_('image field'), upload_to="photos/")

class Locations(models.Model):
    city = models.CharField("City name", max_length=80, null=True)
    lang = models.CharField("Lang",max_length=50,  null=True)
    lat = models.CharField("Lat",max_length=50,  null=True)
    created_at = models.DateTimeField(_("Location created at"),auto_now_add=True,  null=True)
    updated_at = models.DateTimeField(_('Location updated at'),auto_now=True,  null=True)
    class Meta:
        verbose_name = _("Lcation")            
        verbose_name_plural = _("Locations")
    def __str__(self):
        return self.city
    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        
        return super(Locations, self).save(*args, **kwargs)

## user models
class CustomUser(AbstractUser):
    username = None
    first_name = models.CharField(_("first name"), max_length=150)
    last_name = models.CharField(_("last name"), max_length=150)
    date_birth = models.DateField(_("date of birth"), auto_now=False, auto_now_add=False, null=True, blank=True)
    email = models.EmailField(_('email adress'), unique=True)
    adress = models.CharField(_("adress"), max_length=500, default="", null=True, blank=True)
    wilayas = models.CharField( verbose_name=_("Wilaya in algeria"),  max_length=500)
    current_location = models.ForeignKey(Locations, verbose_name=_('user current location'), related_name="user_current_location", on_delete=models.CASCADE, null=True, blank=True)
    last_location = models.ForeignKey(Locations, verbose_name=_('user last location'),related_name="user_last_location", on_delete=models.CASCADE, null=True, blank=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")
    
    def __str__(self):
        return self.email

class Food(models.Model):
    name = models.CharField(_("Food name"), max_length=250,  null=True)
    photo = models.ImageField('Food image ',upload_to="food/photos/main/".format(name), null=True, blank=False)
    description = models.TextField(_('Food description'), null=True)
    price = models.FloatField(_('Food price'), null=True)
    created_at = models.DateTimeField(_("Calendar created at"),auto_now_add=True, null=True)
    updated_at = models.DateTimeField(_('Clendar updated at'),auto_now=True, null=True)
        
    class Meta:
        verbose_name = _("Food")            
        verbose_name_plural = _("Foods")
    def __str__(self):
        return self.name
    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        return super(Food, self).save(*args, **kwargs)



class RestaurantService(models.Model):
    choice = models.CharField(_("Restaurant service name"), max_length=50,  primary_key=True)
    slug = models.SlugField("Restaurant Service slug", max_length=500, null=True)
    created_at = models.DateTimeField(_("Restaurant service created at"),auto_now_add=True, null=True)
    updated_at = models.DateTimeField(_('Restaurant service updated at'), auto_now=True, null=True)
    class Meta:
        verbose_name = _("Restaurant service")            
        verbose_name_plural = _("Restaurants services")
    def __str__(self):
        return str(self.choice)
    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''                
        super( RestaurantService, self).save(*args, **kwargs)
        self.slug= slugify("{}".format(self.choice))
        

class RestaurantType(models.Model):
    choice = models.CharField(_("Restaurant type name"), max_length=125,  primary_key=True)
    slug = models.SlugField("Restaurant Type slug", max_length=500, null=True)
    created_at = models.DateTimeField(_("Restaurant type created at"),auto_now_add=True, null=True)
    updated_at = models.DateTimeField(_('Restaurant type updated at'),auto_now=True,  null=True)
    class Meta:
        verbose_name = _("Restaurant type")            
        verbose_name_plural = _("Restaurants types")
    def __str__(self):
        return str(self.choice)
    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''                
        super( RestaurantType, self).save(*args, **kwargs)
        self.slug= slugify("{}".format(self.choice))

class Restaurant(models.Model):
    name = models.CharField("Restaurant name",max_length=200,null=True)
    photo = models.ImageField('Restaurant image ',upload_to="resturant/photos/main", null=True, blank=False)
    slug = models.SlugField("Restaurant slug", max_length=500,blank=True ,null=True)
    website = models.URLField(max_length=300, null=True, blank=True)
    phone_number = PhoneNumberField(null=True)
    location = models.ForeignKey(Locations, verbose_name="Restaurant location", on_delete=models.CASCADE, null=True)
    verified = models.BooleanField('Verified restaurant', default=False)
    services = models.ManyToManyField(RestaurantService,verbose_name="Restraurant services",blank=True)
    restaurant_type = models.ManyToManyField(RestaurantType, related_name="restaurant_services",verbose_name="Restaurant type", max_length=250,blank=True)
    foods = models.ManyToManyField(Food,verbose_name="Restraurant foods",blank=True)
    rank = models.IntegerField("Restaurant rank", default=-1)
    restaurant_open = models.BooleanField('Restaurant is open now', default=False)
    total_review = models.IntegerField('Total restaurant reviews', default=0)
    photos = models.ManyToManyField(Photos, verbose_name="Restaurant photos",blank=True)
    created_at = models.DateTimeField(_("Restaurant created at"), auto_now_add=True,null=True,blank=False)
    updated_at = models.DateTimeField(_('Restaurant updated at'), auto_now=True, null=True, blank=False)
    
    class Meta:
        verbose_name = _("Restaurant")            
        verbose_name_plural = _("Restaurants")
    def __str__(self):
        return str(self.name)
    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''                
        super(Restaurant, self).save(*args, **kwargs)
        self.slug= slugify("{} {}".format(self.name,self.id))

class RestaurantPromotion(models.Model):
    restaurant  = models.ForeignKey(Restaurant, verbose_name=_("promoted restaurant"), on_delete=models.CASCADE, null=True)
    title = models.CharField("Restraurant promotion title", max_length=50)
    text = models.TextField("Promotion description", null=True)
    created_at = models.DateTimeField(_("Restaurant promotion created at"),auto_now_add=True, null=True)
    updated_at = models.DateTimeField(_('Restaurant promotion updated at'), auto_now=True, null=True)
    class Meta:
        verbose_name = _(" Restaurant Promotion")            
        verbose_name_plural = _(" Restaurants Promotions ")
    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        return super(RestaurantPromotion, self).save(*args, **kwargs)

class Comment(models.Model):
    user = models.ForeignKey(CustomUser, verbose_name=_('User who comment'), on_delete=models.CASCADE,  null=True)
    text = models.TextField("Comment text", null=True)
    replys  = models.ManyToManyField("self",verbose_name="Comment replys", related_name="comment_replys",  blank=True )
    created_at = models.DateTimeField(_("Comment created at"),auto_now_add=True, null=True)
    updated_at = models.DateTimeField(_('Comment updated at'), auto_now=True, null=True)
  
    class Meta:
        ordering = ["-created_at"]
        verbose_name = _("Comment")            
        verbose_name_plural = _("Comments")
    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        return super(Comment, self).save(*args, **kwargs)


class Reviews(models.Model):
    user = models.ForeignKey(CustomUser, verbose_name=_('user who reviewed'), on_delete=models.CASCADE,  null=True)
    number = models.FloatField("number of reviews", null=True)
    created_at = models.DateTimeField(_("Location created at"),auto_now_add=True, null=True)
    updated_at = models.DateTimeField(_('Location updated at'),auto_now=True,  null=True)
    class Meta:
        verbose_name = _("Review")            
        verbose_name_plural = _("Reviews")
    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        return super( Reviews, self).save(*args, **kwargs)

class RestraurantReview(models.Model):
    review = models.ForeignKey(Reviews, verbose_name='retaurant review', on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant,verbose_name='reviewed restaurant', on_delete=models.CASCADE)
    class Meta:
        verbose_name = _('Restaurant Review')
        verbose_name_plural = _('Restaurants Reviews')
    def save(self, *args, **kwargs):
            if not self.id :
                self.restaurant.total_reviews += self.review.number
                self.restaurant.save()
            return super(RestaurantCalendar, self).save(*args, **kwargs)
    def __str__(self):
        return str(self.restaurant.name)

class RestaurantComments(models.Model):
    restaurant  = models.ForeignKey(Restaurant, verbose_name=_("Comment about this restaurant"), on_delete=models.CASCADE,blank=False, null=True)
    comment = models.ForeignKey(Comment, verbose_name=_("Comment text"), on_delete=models.CASCADE,blank=False, null=True)
    review = models.FloatField( verbose_name=_("resturant review"),blank=False, null=True )
    ups = models.IntegerField(_("number of ups in comment"), blank=True, default=0)
    downs = models.IntegerField(_("number of downs in comment"), blank=True, default=0)
    created_at = models.DateTimeField(_("Comment created at"),auto_now_add=True, null=True)
    updated_at = models.DateTimeField(_('Comment updated at'), auto_now=True, null=True)
    class Meta:
        ordering = ["-created_at"]
        verbose_name = _("Comment")            
        verbose_name_plural = _("Comments")
    def save(self, *args, **kwargs):
            total_review = self.restaurant.total_review if self.restaurant.total_review else 0
            review = self.review if self.review else 0
            rest_review_number = RestaurantComments.objects.filter(restaurant=self.restaurant).count() 
            review = review / int(rest_review_number if rest_review_number else 1)
            total_review += int(review)
            self.restaurant.total_review = total_review
            self.restaurant.save()
            print("total review " ,self.restaurant.total_review)
            return super(RestaurantComments, self).save(*args, **kwargs)

class ReastaurantCommentsUp(models.Model):
    restaurant_comments = models.ForeignKey(RestaurantComments, verbose_name=_("restaurant comment"), on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, verbose_name=_('user who cote up on comment'), on_delete=models.CASCADE)
    created_at = models.DateTimeField(_("Comment created at"),auto_now_add=True, null=True)
    updated_at = models.DateTimeField(_('Comment updated at'), auto_now=True, null=True)
    class Meta:
        ordering = ["-created_at"]
        verbose_name = _("Restaurant comment up")            
        verbose_name_plural = _("Restaurants comments up")
        constraints = [
            models.UniqueConstraint(fields=['restaurant_comments', 'user'], name='unique_up_comment_voting')
        ]
    def save(self, *args, **kwargs):
            exist  = ReastaurantCommentsUp.objects.filter(restaurant_comments=self.restaurant_comments, user=self.user).exists()
            if not exist:
                votes   =  self.restaurant_comments.ups if self.restaurant_comments.ups else 0
                votes +=1
                self.restaurant_comments.ups = votes
                self.restaurant_comments.save()  
            return super(ReastaurantCommentsUp, self).save(*args, **kwargs)

class ReastaurantCommentsDown(models.Model):
    restaurant_comments = models.ForeignKey(RestaurantComments, verbose_name=_("Restaurant comment"), on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, verbose_name=_('User who cote up on comment'), on_delete=models.CASCADE)
    created_at = models.DateTimeField(_("Comment created at"),auto_now_add=True, null=True)
    updated_at = models.DateTimeField(_('Comment updated at'), auto_now=True, null=True)
    class Meta:
        ordering = ["-created_at"]
        verbose_name = _("Restaurant comment down")            
        verbose_name_plural = _("Restaurants comments down")
        constraints = [
            models.UniqueConstraint(fields=['restaurant_comments', 'user'], name='unique_dow_comment_voting')
        ]
    def save(self, *args, **kwargs):
            exist  = ReastaurantCommentsDown.objects.filter(restaurant_comments=self.restaurant_comments, user=self.user).exists()
            if not exist:
                votes   =  self.restaurant_comments.downs if self.restaurant_comments.downs else 0
                votes +=1
                self.restaurant_comments.downs = votes
                self.restaurant_comments.save() 
            return super(ReastaurantCommentsDown, self).save(*args, **kwargs)

class RestaurantCalendar(models.Model):
        class SevenDaysOfWeek(models.TextChoices):
            Sunday    = "Su", _('Sunday')
            Monday    = "Mo", _('Monday')
            Tuesday   = "Tu", _('Tuesday')
            Wednesday = "We", _('Wednesday')
            Thursday  = "Th", _('Thursday')
            Friday    = "Fr", _('Friday')
            Saturday  = "Sa", _('Saturday')


        restaurant_name = models.ForeignKey(Restaurant,verbose_name=_("Restaurant name"),on_delete=models.CASCADE)
        day = models.CharField(_("Day"), max_length=5 ,choices=SevenDaysOfWeek.choices, default=SevenDaysOfWeek.Sunday )
        open_time = models.TimeField(_("Open time"))
        close_time = models.TimeField(_('Close time'))
        created_at = models.DateTimeField(_("Calendar created at"),auto_now_add=True)
        updated_at = models.DateTimeField(_('Clendar updated at'),auto_now=True)
        
        class Meta:
            verbose_name = _("Reastaurant Calendar")            
            verbose_name_plural = _("Reastaurants Calendars")

        def save(self, *args, **kwargs):
            ''' On save, update timestamps '''
            return super(RestaurantCalendar, self).save(*args, **kwargs)
        
        def __str__(self):
            return self.restaurant_name.name


class FoodReview(models.Model):
    restaurant_name = models.ForeignKey(Restaurant, verbose_name='restaurant name',null=True, on_delete=models.CASCADE)
    review = models.ForeignKey(Reviews, verbose_name='food review', on_delete=models.CASCADE)
    food = models.ForeignKey(Food,verbose_name='reviewed food', on_delete=models.CASCADE)
    class Meta:
        verbose_name = _('Food Reiview')
        verbose_name_plural = _('Foods Reviews')
    def __str__(self):
        return self.restaurant_name.name

