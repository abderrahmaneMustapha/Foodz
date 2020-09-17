from django.contrib.auth.models import  Group
from .models import (AbstractUser as User,Locations,Restaurant,RestaurantPromotion, RestraurantComments, 
                Reviews, RestaurantCalendar, Photos, Food, FoodReview, RestaurantType, RestraurantReview,RestaurantService)
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'first_name', 'last_name', 'email','date_birth', 'adress', 'wilayas', 'current_location', 'last_location', 'groups', ]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class LocationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Locations
        fields = ['url', 'city', 'lang', 'lat']

class RestaurantServiceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RestaurantService
        fields =['url', 'choice' ,'slug' , 'created_at']

class RestaurantTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RestaurantType
        fields =['url', 'choice','slug' , 'created_at']

class RestaurantSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['url', 'name','photo', 'slug','verified', 'services', 'foods', 'rank', 'restaurant_type',
                  'restaurant_open', 'phone_number', 'location', 'photos', 'created_at', 'total_review']



class RestaurantPromotionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RestaurantPromotion
        fields = ['url', 'restaurant', 'title', 'text', 'created_at']

class RestaurantCommentsPromotionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RestraurantComments
        fields = ['url', 'restaurant', 'comment', 'created_at']

class FoodReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FoodReview
        fields = ['url', 'restaurant_name', 'review', 'food']

class RestaurantReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RestraurantReview
        fields = ['url',  'food']

class RestaurantCalendarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RestaurantCalendar
        fields = ['url', 'restaurant_name', 'day', 'open_time', 'close_time', 'created_at']

class PhotosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Photos
        fields = ['url', 'ImageField']
class FoodSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Food
        fields = ['url','name','photo','created_at']