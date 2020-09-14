from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model 

from rest_framework import viewsets, generics, filters as rest_filters
from rest_framework import permissions

from .serializers import *
from .models import (Locations, Restaurant,Reviews, RestaurantCalendar, RestaurantPromotion,
                    Food, RestaurantService,RestaurantType )
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

class RestaurantServiceViewSet(viewsets.ModelViewSet):
    queryset = RestaurantService.objects.all()
    serializer_class = RestaurantServiceSerializer
    permission_classes = [permissions.AllowAny]

class RestaurantTypeViewSet(viewsets.ModelViewSet):
    queryset = RestaurantType.objects.all()
    serializer_class = RestaurantTypeSerializer
    permission_classes = [permissions.AllowAny]

class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [rest_filters.SearchFilter,filters.DjangoFilterBackend,rest_filters.OrderingFilter]
    search_fields = ['^name', '^location__city',  '^foods__name']
    ordering_fields = ['created_at', 'total_review']
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
