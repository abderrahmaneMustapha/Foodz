from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'photos', views.PhotosViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'locations', views.LocationViewSet)
router.register(r'restaurant', views.RestaurantViewSet)
router.register(r'restaurant-comment', views.RestaurantCommentsViewsSet)
router.register(r'restaurant-service', views.RestaurantServiceViewSet)
router.register(r'restaurant-type', views.RestaurantTypeViewSet)
router.register(r'restaurant-promotion', views.RestaurantPromotionViewSet)
router.register(r'restaurant-review', views.RestaurantReviewViewSet)
router.register(r'food-review', views.FoodReviewViewSet)
router.register(r'restaurant-calendar', views.RestaurantCalendarViewsSet)
router.register(r'food', views.FoodViewsSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]