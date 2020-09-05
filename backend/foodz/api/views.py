from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model 
from .models import (Locations, Restaurant,Reviews, RestaurantCalendar, RestaurantPromotion,
                    Food)
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    User = get_user_model()
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class LocationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Locations.objects.all()
    serializer_class = LocationSerializer
    permission_classes = [permissions.IsAuthenticated]

class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [permissions.IsAuthenticated]

class RestaurantPromotionViewSet(viewsets.ModelViewSet):
    queryset = RestaurantPromotion.objects.all()
    serializer_class = RestaurantPromotionSerializer
    permission_classes = [permissions.IsAuthenticated]

class RestaurantReviewViewSet(viewsets.ModelViewSet):
        queryset = Reviews.objects.all()
        serializer_class = RestaurantReviewSerializer
        permission_classes = [permissions.IsAuthenticated]

class FoodReviewViewSet(viewsets.ModelViewSet):
        queryset = Reviews.objects.all()
        serializer_class = FoodReviewSerializer
        permission_classes = [permissions.IsAuthenticated]

class RestaurantCalendarViewsSet(viewsets.ModelViewSet):
        queryset = RestaurantCalendar.objects.all()
        serializer_class = RestaurantCalendarSerializer
        permission_classes = [permissions.IsAuthenticated]

class FoodViewsSet(viewsets.ModelViewSet):
        queryset = Food.objects.all()
        serializer_class = FoodSerializer
        permission_classes = [permissions.IsAuthenticated]
