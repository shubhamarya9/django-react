from rest_framework import routers
from .viewsets import AuthorViewset, BookViewset

router = routers.DefaultRouter()

router.register('books', BookViewset, 'books')
router.register('authors', AuthorViewset, 'authors')

urlpatterns = router.urls
