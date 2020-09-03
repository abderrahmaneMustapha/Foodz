from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

from .managers import CustomUserManager
# Create your models here.
## user models
class CustomUser(AbstractUser):
    username = None
    first_name = models.CharField(_("first name"), max_length=150)
    last_name = models.CharField(_("last name"), max_length=150)
    date_birth = models.DateField(_("date of birth"), auto_now=False, auto_now_add=False, null=True, blank=True)
    email = models.EmailField(_('email adress'), unique=True)
    adress = models.CharField(_("adress"), max_length=500, default="", null=True, blank=True)
    wilayas = models.CharField( verbose_name=_("Wilaya in algeria"),  max_length=500)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")
    
    def __str__(self):
        return self.email



class Locations(models.Model):
    pass
class Reviews(models.Model):
    pass
class Restaurant(models.Model):
    pass

class RestaurantCalendar(models.Model):
        restaurant_name = models.ForeignKey(Restaurant,verbose_name=_("Restaurant name"),on_delete=models.CASCADE)
        day = models.CharField(_("Day"), max_length=25)
        open_time = models.TimeField(_("Open time"))
        close_time = models.TimeField(_('Close time'))
        created_at = models.DateTimeField(_("Calendar created at"))
        updated_at = models.DateTimeField(_('Clendar updated at'))
        
        class Meta:
            verbose_name = _("Reastaurant Calendar")            
            verbose_name_plural = _("Reastaurants Calendars")

        def save(self, *args, **kwargs):
            ''' On save, update timestamps '''
            if not self.id:
                self.created = timezone.now()
            self.modified = timezone.now()
            return super(RestaurantCalendar, self).save(*args, **kwargs)
        
        def __str__(self):
            return self.restaurant_name.name
class Food(models.Model):
    pass
