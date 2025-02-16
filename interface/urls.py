from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('compile-and-run-cpp/', views.compile_and_run_cpp, name='compile_and_run_cpp'),
    path('compile-and-run-java/', views.compile_and_run_java, name='compile_and_run_java'),
    path('save_code/', views.save_code, name="save_code"),
    path('execute-python/', views.compile_and_run_python, name='execute-python'),
]