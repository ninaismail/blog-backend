<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller; 
use App\Models\BlogPost;
use Illuminate\Http\Request;

class BlogPostController extends Controller
{
    public function index()
    {
        return BlogPost::all();
    }

    public function getFeatured(BlogPost $blogpost)
    {
        $featuredPosts = $blogpost->featured()->get();
        return response()->json($featuredPosts);
    }

    public function getArabic(BlogPost $blogpost)
    {
        $arabicPosts = $blogpost->arabic()->get();
        return response()->json($arabicPosts);
    }
}