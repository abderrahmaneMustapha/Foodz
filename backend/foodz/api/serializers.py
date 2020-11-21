from django.contrib.auth.models import  Group
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login

from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework.authtoken.models import Token

from .models import (CustomUser as User,Locations,Restaurant,RestaurantPromotion, RestaurantComments, 
                Reviews, RestaurantCalendar, Photos, Food, FoodReview, RestaurantType, Comment, 
                RestraurantReview,RestaurantService, ReastaurantCommentsDown, ReastaurantCommentsUp)



class UserCreationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    first_name =  serializers.CharField(max_length=200)
    last_name =  serializers.CharField(max_length=200)
    date_birth = serializers.DateField(required=False)
    adress=  serializers.CharField(max_length=200)
    wilayas =  serializers.CharField(max_length=100)
    password = serializers.CharField(min_length=8, write_only=True)
    def create(self, validate_data):
        user =  User.objects.create_user(first_name=validate_data['first_name'], last_name=validate_data['last_name'],
            email=validate_data['email'], password=validate_data['password'], date_birth=validate_data['date_birth'],
            adress=validate_data['adress'], wilayas=validate_data['wilayas'])
        return user
    class Meta:
        model = User
        fields = ["first_name", "last_name", 'email','password', 'date_birth', 'adress', 'wilayas']

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(
        required=True,
        )
    password = serializers.CharField(min_length=8, required=True )
    
    def validate(self, data):
       
        email = data.get("email", None)
        password = data.get("password", None)
       
        user = authenticate(email=email, password=password)
        
        if user is None:
            
            raise serializers.ValidationError(
                'A user with this email and password is not found.'
            )
        
        return user
    


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'id', 'key','first_name', 'last_name', 'email', 'date_birth', 'adress', 'wilayas', 'current_location', 'last_location', 'groups', ]


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
        fields = ['url','id', 'name','photo', 'slug', 'website','verified', 'services', 'foods', 'rank', 'restaurant_type',
                  'restaurant_open', 'phone_number', 'location', 'photos', 'created_at', 'total_review', 'number_of_reviews']



class RestaurantPromotionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RestaurantPromotion
        fields = ['url', 'restaurant', 'title', 'text', 'created_at']

class CommentsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['url', 'id', 'user', 'text', 'replys', 'created_at', 'updated_at']
        
class RestaurantCommentsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RestaurantComments
        fields = ['url', 'id', 'restaurant', 'comment', 'review' , 'ups', 'downs', 'created_at']

class ReastaurantCommentsDownSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ReastaurantCommentsDown
        fields = ['url', 'id', 'restaurant_comments', 'user', 'created_at']

class ReastaurantCommentsUpSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ReastaurantCommentsUp
        fields = ['url', 'id', 'restaurant_comments', 'user', 'created_at']

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
        fields = ['url','name', 'description', 'price', 'photo','created_at']