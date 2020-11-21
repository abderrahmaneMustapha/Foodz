#from
# https://stackoverflow.com/questions/40985248/django-api-framework-getting-total-pages-available/40985524

from django.conf import settings
from rest_framework import pagination
from rest_framework.response import Response


class YourPagination(pagination.PageNumberPagination):

    def get_paginated_response(self, data):
        return Response({            
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),        
            'count': self.page.paginator.count,
            'total_pages': self.page.paginator.num_pages,
            'results': data
        })

