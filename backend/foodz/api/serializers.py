from django.contrib.auth.models import  Group
from .models import (AbstractUser as User,Locations,Restaurant,)
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups', ]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class LocationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Locations
        fields = ['url', 'city', 'lang', 'lat']

class RestaurantSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['url', 'name']
