from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    weight = models.CharField(max_length=50)
    rate = models.IntegerField()
    image = models.ImageField(upload_to="products/")

    def __str__(self):
        return self.name
    
# Add to cart

from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    unit = models.CharField(max_length=50)  # e.g. "500ml", "500g"
    image = models.ImageField(upload_to='products/')
    category = models.CharField(max_length=100)
    stock = models.IntegerField(default=100)

    def __str__(self):
        return self.name


class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def total_amount(self):
        return sum(item.subtotal() for item in self.items.all())

    def total_items(self):
        return sum(item.quantity for item in self.items.all())


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def subtotal(self):
        return self.product.price * self.quantity

    class Meta:
        unique_together = ('cart', 'product')

