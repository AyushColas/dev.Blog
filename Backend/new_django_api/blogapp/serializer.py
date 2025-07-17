from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Blog

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model() 
        fields = ["id", "email", "username", "first_name", "last_name", "password"]
        extra_kwargs = {
            "password" : {"write_only" : True}
        }

    def create(self, validated_data):
        email = validated_data["email"]
        username = validated_data["username"]
        first_name = validated_data["first_name"]
        last_name = validated_data["last_name"]
        password = validated_data["password"] 

        user_model = get_user_model()
        
        new_user = user_model.objects.create_user(
            username=username,
            email=email,
            password=password, 
            first_name=first_name,
            last_name=last_name
        )
       
        new_user.set_password(password) 
        new_user.save() 
        return new_user
    
class UpdateUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model() 
        fields = ["id", "email", "username", "first_name", "last_name", "bio", "profile_picture","facebook","instagram","youtube","github"]

class SimpleAuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["id", "username", "first_name", "last_name"]
    
class BlogSerializer(serializers.ModelSerializer):
    author = SimpleAuthorSerializer(read_only=True)
    class Meta:
        model = Blog
        fields  = ["id", "title", "slug", "author", "category", "content", "featured_image", "published_date", "is_draft", "created_at", "updated_at"]