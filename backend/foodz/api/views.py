from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model 

from rest_framework import viewsets, generics, filters as rest_filters
from rest_framework import permissions

from .serializers import *
from .models import (Locations, Restaurant,Reviews, RestaurantCalendar, RestaurantPromotion,
                    Food)
from .filters import RestaurantFilters
from django_filters import rest_framework as filters


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    User = get_user_model()
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.AllowAny]


class LocationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Locations.objects.all()
    serializer_class = LocationSerializer
    permission_classes = [permissions.AllowAny]

class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [rest_filters.SearchFilter,filters.DjangoFilterBackend]
    search_fields = ['^name', 'location__city',  '^foods__name']
    filter_class = RestaurantFilters
    
    
class RestaurantPromotionViewSet(viewsets.ModelViewSet):
    queryset = RestaurantPromotion.objects.all()
    serializer_class = RestaurantPromotionSerializer
    permission_classes = [permissions.AllowAny]

class RestaurantReviewViewSet(viewsets.ModelViewSet):
        queryset = Reviews.objects.all()
        serializer_class = RestaurantReviewSerializer
        permission_classes = [permissions.AllowAny]

class FoodReviewViewSet(viewsets.ModelViewSet):
        queryset = Reviews.objects.all()
        serializer_class = FoodReviewSerializer
        permission_classes = [permissions.AllowAny]

class RestaurantCalendarViewsSet(viewsets.ModelViewSet):
        queryset = RestaurantCalendar.objects.all()
        serializer_class = RestaurantCalendarSerializer
        permission_classes = [permissions.AllowAny]

class FoodViewsSet(viewsets.ModelViewSet):
        queryset = Food.objects.all()
        serializer_class = FoodSerializer
        permission_classes = [permissions.AllowAny]
