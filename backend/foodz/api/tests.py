from django.urls import reverse
from rest_framework.test import APITestCase
from django.test import Client
from .models import CustomUser as User
from rest_framework import status
from datetime import date
from rest_framework.authtoken.models import Token
class USerCreationTest(APITestCase):
   
    def setUp(self):
        # create a new user 
        self.test_user = User.objects.create_user(first_name='test', last_name='user', 
                                    email='testuser@test.com', password='passworD1234', date_birth='2011-05-05',
                                    adress="mohamed djanhlen tiaret",  wilayas='tiaret')

        # url to create a new user
        self.create_user_url = reverse('create-account')

    def test_create_user(self):
        data = {
            'first_name': 'test', 
            'last_name': 'user', 
            'email': 'testusbselor@test.com', 
            'password' : 'passworD1234',
            'date_birth': date.fromisoformat('2019-05-12'), 
            'adress' : "mohamed djanhlen tiaret",
            'wilayas': 'tiaret'
        }
        c = Client()
        response = c.post(self.create_user_url, data, format="json")
        #self.assertEqual(User.objects.count(), 2)
        #self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        #self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        user = User.objects.latest('id')
        
        token = Token.objects.get(user=user)
        self.assertEqual(response.data['token'], token.key)
            
        self.assertFalse('password' in response.data)


class UserSigninTest(APITestCase):
    pass