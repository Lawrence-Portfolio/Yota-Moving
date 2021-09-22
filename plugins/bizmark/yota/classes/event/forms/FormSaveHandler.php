<?php namespace Bizmark\Yota\Classes\Event\Forms;

use Http;
use October\Rain\Argon\Argon;

/**
 * Class FormSaveHandler
 * @package Bizmark\Yota\Classes\Event\Forms
 */
class FormSaveHandler
{
    const API_KEY = 'FDzMBUSl0L2ls5xtovOETaFRsR9FGUAX6fPvnPuK';
    const API_ENDPOINT = 'https://oncueapp.com/api/v1/companies/'.self::API_KEY.'/customers';

    /**
     * Add listeners
     * @param \Illuminate\Events\Dispatcher $obEvent
     */
    public function subscribe($obEvent)
    {
        $obEvent->listen('martin.forms.afterSaveRecord', function (&$formData, $component) {
            $this->sendLead($formData);
        });
    }

    protected function sendLead($data)
    {
        $now = Argon::now()->format('Y-M-D');

        $requestData = [
            'company_id' => self::API_KEY,
            'customer' => [
                'lead_type' => 'paid_lead',
                'referral_source' => 'Website',
                'scheduled_on' => $now,
                'name' => array_get($data, 'First-name'),
                'phone_number' => array_get($data, 'Phone'),
                'email_address' => array_get($data, 'Email'),
            ]
        ];

        $response = Http::post(self::API_ENDPOINT, function($http) use ($requestData) {
            $http->data($requestData);
        });

        trace_log(var_dump($response));
    }
}