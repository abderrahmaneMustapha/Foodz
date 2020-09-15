from django_filters import rest_framework as filters
from .models import Restaurant
class RestaurantFilters(filters.FilterSet):
      class Meta:
        model = Restaurant
        fields = ['foods__name','restaurant_type__choice', "restaurant_open",
                'total_review', 'services__slug']