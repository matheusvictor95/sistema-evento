<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = 'eventos';
    protected $primaryKey = 'id';

    protected $fillable = ['nome','data','localizacao','descricao','kit'];
       public function inscricoes()
    {
        return $this->hasMany(Inscricao::class);
    }
}
