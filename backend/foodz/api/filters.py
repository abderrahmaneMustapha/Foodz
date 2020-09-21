from django_filters import rest_framework as filters
from .models import Restaurant, RestaurantComments
class RestaurantFilters(filters.FilterSet):
      class Meta:
        model = Restaurant
        fields = ['foods__name','restaurant_type__choice', "restaurant_open",
                'total_review', 'services__slug']

class RestaurantCommentsFilters(filters.FilterSet):
  class Meta:
    model  = RestaurantComments
    fields = ['restaurant__id', 'comment__user__id']