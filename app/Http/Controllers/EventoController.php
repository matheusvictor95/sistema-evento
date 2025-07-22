<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Requests\StoreEventoRequest;
use App\Models\Evento;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class EventoController extends Controller
{
    
    public function index()
    {
        $eventos = Evento::all();
        return Inertia::render('Evento/Index',[
            'eventos' => $eventos,
        ]);
    }

    
    public function create()
    {
    
        return Inertia::render('Evento/Create');
    }

    public function store(StoreEventoRequest $request)
    {
        $evento = Evento::create($request->validated());
        return Inertia::render('Evento/Index',[
            'evento' => $evento,
        ]);
       
    }

  
    public function show($id)
    {
     return Inertia::render('Evento/Show', [
        'evento' => $id
     ]);
    }
}
