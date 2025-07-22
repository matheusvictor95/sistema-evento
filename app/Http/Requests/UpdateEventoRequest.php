<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEventoRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'nome' => 'required|string|max:255',
            'data' => 'required|date',
            'localizacao' => 'required|string',
            'descricao' => 'required|string',
            'kit' => 'nullable|string',
        ];
    }
}
