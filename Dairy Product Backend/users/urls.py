from django.urls import path
from .views import (
    getproduct,
    getproducts,
    create_product,
    delete_product
)
from .views import(register,login_view)

from .views import(get_cart, add_to_cart, update_cart_item, clear_cart, remove_cart_item)

urlpatterns = [
    
    
    path("products/", getproducts),
    path("products/<int:pk>/", getproduct),
    path("products/create/", create_product),
    path("products/delete/<int:pk>/", delete_product),
    path('register/', register),
    path('login/', login_view),

    # cart urls - idhu add pannunga
    path('cart/', get_cart),
    path('cart/add/', add_to_cart),
    path('cart/update/<int:item_id>/', update_cart_item),
    path('cart/remove/<int:item_id>/', remove_cart_item),
    path('cart/clear/', clear_cart),

]
