<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DistanceCalculator extends Controller
{
    function distanceMatrix() {
        $predefinedCustomKey='something';
        $customKey=\Request::get('customKey');
        if($customKey != $predefinedCustomKey){
            return response()->json([
                'code'      =>  404,
                'message'   =>  'error'
            ], 404);
        }
        $apiKey = 'AIzaSyAQVYZsPBTAUB-XIzTS6Ou6lOR8YYB3-p8';
        $fromLat=\Request::get('fromLat');
        $fromLong=\Request::get('fromLong');
        $toLat=\Request::get('toLat');
        $toLong=\Request::get('toLong');

        try{
            $breeds = Http::get('https://maps.googleapis.com/maps/api/distancematrix/json?origins='.$fromLat.','.$fromLong.'&destinations='.$toLat.','.$toLong.'&key='.$apiKey);
            return response()->json(['rows'=>$breeds['rows']]);
        }
        catch(\Exception $e){
            return response()->json([
                'code'      =>  404,
                'message'   =>  'error'
            ], 404);
        }
    }


}
