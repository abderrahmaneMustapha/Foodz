#django
from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model 
from django.contrib.auth.decorators import login_required 
from django.utils.decorators import method_decorator 

#django rest 
from rest_framework import viewsets, generics, filters as rest_filters
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

#django filters
from django_filters import rest_framework as filters

#me
from .serializers import *
from .models import (Locations, Restaurant,Reviews, RestaurantCalendar, RestaurantPromotion,
                    Food, RestaurantService,RestaurantType, RestaurantComments, Comment,ReastaurantCommentsDown,
                    ReastaurantCommentsUp )                  
from .filters import RestaurantFilters, RestaurantCommentsFilters,RestaurantCommentsDown, RestaurantCommentsUp





class UserCreateViewSet(APIView):
    """ 
    Creates the user. 
    """
    def post(self, request, format='json'):
        serializer = UserCreationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                token = Token.objects.create(user=user)
                json = serializer.data
                json["id"] = user.id
                json["first_name"] = user.first_name
                json["last_name"] = user.last_name
                json['profile_pic'] = user.profile_pic.url
                del json['password']
                #generate token
                json['token'] = token.key

                #success
                return Response(json, status=status.HTTP_201_CREATED)
        
        #bad request 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginViewSet(APIView):
    def post(self, request, format="json"):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validate(request.data)
            if user :               
                token = Token.objects.get(user=user)
                json = serializer.data
                json["id"] = user.id
                json["first_name"] = user.first_name
                json["last_name"] = user.last_name
                json['profile_pic'] = user.profile_pic.url
                del json['password']
                #generate token
                json['token'] = token.key

                #success
                return Response(json, status=status.HTTP_202_ACCEPTED)
        
        #bad request 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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

class CommentsViewsSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = [permissions.AllowAny]
    
    def create(self,request, *args, **kwargs):
        if not request.user.is_authenticated :
            return Response(status=status.HTTP_401_UNAUTHORIZED)   
        return super( CommentsViewsSet, self).create(request,*args, **kwargs)

class RestaurantCommentsViewsSet(viewsets.ModelViewSet):
    queryset = RestaurantComments.objects.all()
    serializer_class = RestaurantCommentsSerializer
    filter_backends = [filters.DjangoFilterBackend, rest_filters.OrderingFilter]
    ordering_fields = ['created_at', 'total_review']
    filter_class = RestaurantCommentsFilters
    permission_classes = [permissions.AllowAny]
  
    def create(self, request,  *args, **kwargs):
        if not request.user.is_authenticated :
            return Response(status=status.HTTP_401_UNAUTHORIZED)  
        return super( RestaurantCommentsViewsSet, self).create(request, *args, **kwargs)

class ReastaurantCommentsUpViewsSet(viewsets.ModelViewSet):
    queryset = ReastaurantCommentsUp.objects.all()
    serializer_class = ReastaurantCommentsUpSerializer
    filter_backends = [filters.DjangoFilterBackend, rest_filters.OrderingFilter]
    ordering_fields = ['created_at', 'pk']
    permission_classes = [permissions.AllowAny]
    filter_class = RestaurantCommentsUp
  
    def create(self, request, *args, **kwargs):
        if not request.user.is_authenticated :
            return Response(status=status.HTTP_401_UNAUTHORIZED)  
        return super( ReastaurantCommentsUpViewsSet, self).create(request, *args, **kwargs)


class ReastaurantCommentsDownViewsSet(viewsets.ModelViewSet):
    queryset = ReastaurantCommentsDown.objects.all()
    serializer_class = ReastaurantCommentsDownSerializer
    filter_backends = [filters.DjangoFilterBackend, rest_filters.OrderingFilter]
    ordering_fields = ['created_at', 'pk']
    permission_classes = [permissions.AllowAny]
    filter_class = RestaurantCommentsDown
  
    def create(self, request,  *args, **kwargs):
        if not request.user.is_authenticated :
            return Response(status=status.HTTP_401_UNAUTHORIZED)  
        return super( ReastaurantCommentsDownViewsSet, self).create(request, *args, **kwargs)

class FoodViewsSet(viewsets.ModelViewSet):
        queryset = Food.objects.all()
        serializer_class = FoodSerializer
        permission_classes = [permissions.AllowAny]

class PhotosViewSet(viewsets.ModelViewSet):
        queryset = Photos.objects.all()
        serializer_class = PhotosSerializer
        permission_classes = [permissions.AllowAny]
