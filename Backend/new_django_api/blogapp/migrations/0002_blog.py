# Generated by Django 5.2.4 on 2025-07-16 18:27

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blogapp", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Blog",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=255)),
                ("slug", models.SlugField(blank=True, max_length=255, unique=True)),
                ("content", models.TextField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                ("published_date", models.DateTimeField(blank=True, null=True)),
                ("is_draft", models.BooleanField(default=True)),
                (
                    "category",
                    models.CharField(
                        blank=True,
                        choices=[
                            ("Technology", "Technology"),
                            ("Economy", "Economy"),
                            ("Business", "Business"),
                            ("Sports", "Sports"),
                            ("Lifestyle", "Lifestyle"),
                        ],
                        max_length=255,
                        null=True,
                    ),
                ),
                (
                    "featured_image",
                    models.ImageField(blank=True, null=True, upload_to="Blog_img"),
                ),
                (
                    "author",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="blogs",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "ordering": ["-published_date"],
            },
        ),
    ]
