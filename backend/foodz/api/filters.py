from django_filters import rest_framework as filters
from .models import Restaurant, RestaurantComments, ReastaurantCommentsDown, ReastaurantCommentsUp, ReastaurantCommentsDown
class RestaurantFilters(filters.FilterSet):
      class Meta:
        model = Restaurant
        fields = ['slug', 'foods__name','restaurant_type__choice', "restaurant_open",
                'total_review', 'services__slug']

class RestaurantCommentsFilters(filters.FilterSet):
  class Meta:
    model  = RestaurantComments
    fields = ['restaurant__id', 'comment__user__id']

class RestaurantCommentsUp(filters.FilterSet):
  class Meta:
    model = ReastaurantCommentsUp
    fields = ['restaurant_comments__id']

class RestaurantCommentsDown(filters.FilterSet):
  class Meta:
    model = ReastaurantCommentsDown
    fields = ['restaurant_comments__id']