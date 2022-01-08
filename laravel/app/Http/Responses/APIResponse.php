<?php

namespace App\Http\Responses;

use Illuminate\Http\JsonResponse;

class APIResponse
{
    /**
     * Return json response
     *
     * @param bool $success
     * @param array|null $data
     * @param string|null $message
     * @param int $http_code
     * @return JsonResponse
     */
    static function make(bool $success = true, $data = null, string $message = null, int $http_code = 200): JsonResponse
    {
        return response()->json([
            'success' => $success,
            'data' => $data,
            'message' => $message
        ], $http_code);
    }

    /**
     * Return success json response
     * @param array|null $data
     * @param string|null $message
     * @param int $http_code
     * @return JsonResponse
     * @since 1.0.0
     *
     */
    static function success($data = null, string $message = null, int $http_code = 200): JsonResponse
    {
        return self::make(true, $data, $message, $http_code);
    }

    /**
     * Return fail json response
     * @param string|null $message
     * @param array|null $data
     * @param int $http_code
     * @return JsonResponse
     * @since 1.0.0
     *
     */
    static function fail(string $message = null, $data = null, int $http_code = 404): JsonResponse
    {
        return self::make(false, $data, $message, $http_code);
    }
}
