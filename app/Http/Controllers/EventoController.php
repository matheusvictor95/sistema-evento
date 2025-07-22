<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Requests\StoreEventoRequest;
use App\Http\Requests\UpdateEventoRequest;
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
        Evento::create($request->validated());
        return to_route('evento.index');
       
    }

  
    public function show($id)
    {
     return Inertia::render('Evento/Show', [
        'evento' => $id
     ]);
    }

    public function edit($id)
    {
        $evento = Evento::find($id);
        return Inertia::render('Evento/Edit', [
            'evento' => $evento
        ]);
    }

    public function update(UpdateEventoRequest $request, $id)
    {
        $evento = Evento::find($id);
        $evento->update($request->validated());
        return to_route('evento.index');
    }
}
