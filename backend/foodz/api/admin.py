from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Photos)
admin.site.register(Food)
admin.site.register(Restaurant)
admin.site.register(Locations)
admin.site.register(RestaurantComments)
admin.site.register(Comment)
admin.site.register(CustomUser)