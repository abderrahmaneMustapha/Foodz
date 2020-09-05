from django.contrib.auth.models import  Group
from .models import (AbstractUser as User,Locations,Restaurant,RestaurantPromotion, RestraurantComments, 
                Reviews, RestaurantCalendar, Food, FoodReview, RestraurantReview)
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

class RestaurantSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['url', 'name','verified', 'rank', 'restaurant_type', 'restaurant_opn', 'phone_number', 'location', 'photos', 'created_at']

class RestaurantPromotionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RestaurantPromotion
        fields = ['url', 'restaurant', 'title', 'text', 'created_at']

class RestaurantCommentsPromotionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        models = RestraurantComments
        fields = ['url', 'restaurant', 'comment', 'created_at']

class FoodReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        models = FoodReview
        fields = ['url',  'food']

class RestaurantReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        models = RestraurantReview
        fields = ['url',  'food']

class RestaurantCalendarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        models = RestaurantCalendar
        fields = ['url', 'restaurant_name', 'day', 'open_time', 'close_time', 'created_at']

class FoodSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        models = Food
        fields = ['url', 'restaurant_name', 'created_at']