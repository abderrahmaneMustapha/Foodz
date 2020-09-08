import django_filters
from .models import Restaurant
class RestaurantFilters(django_filters.FilterSet):
    class Meta:
        model = Restaurant
        fields = ['name']