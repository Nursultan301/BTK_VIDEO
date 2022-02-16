from django.urls import path
from .views import logout_system, sign_in, login_validator, register_validator

urlpatterns = [
    path('sign_in/', sign_in, name='sign_in'),
    path('logout/', logout_system, name='logout'),
    path('validator/login/', login_validator, name='login_validator'),
    path('validator/register/', register_validator, name='register_validator'),
]