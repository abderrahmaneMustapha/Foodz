from django_filters import rest_framework as filters
from .models import Restaurant
class RestaurantFilters(filters.FilterSet):
    low_rating = filters.NumberFilter(field_name="total_review", lookup_expr="gte")
    high_rating= filters.NumberFilter(field_name="total_review", lookup_expr="lte")
    class Meta:
        model = Restaurant
        fields = ['name', 'restaurant_type__choice',
                'low_rating', "high_rating", "restaurant_open",
                'total_review', 'services__choice']