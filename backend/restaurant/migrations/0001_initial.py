# Generated by Django 4.1 on 2022-10-24 15:37

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Restaurant",
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
                ("name", models.CharField(max_length=250)),
                ("category", models.CharField(blank=True, max_length=250)),
                ("country", models.CharField(blank=True, max_length=250)),
                ("street", models.CharField(blank=True, max_length=250)),
                ("zip", models.IntegerField(blank=True)),
                ("phone", models.IntegerField(blank=True)),
                ("website", models.URLField(blank=True)),
                ("email", models.EmailField(blank=True, max_length=254)),
                ("opening_hours", models.CharField(blank=True, max_length=250)),
                (
                    "price_level",
                    models.IntegerField(
                        validators=[
                            django.core.validators.MaxValueValidator(4),
                            django.core.validators.MinValueValidator(1),
                        ]
                    ),
                ),
                ("image", models.ImageField(blank=True, null=True, upload_to="")),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="restaurant",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]