from django.urls import path
from . import views


urlpatterns = [
    path("register_user/", views.register_user, name = "register_user"),
    path("create_blog/", views.create_blog, name="create_blog")
]

