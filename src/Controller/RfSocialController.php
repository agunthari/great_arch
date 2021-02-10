<?php
// src/Controller/RfSocialController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class RfSocialController extends AbstractController
{
	/**
     * @Route("/rf-social")
     */
    public function home(): Response
    {
    	return $this->render('pages/rf-social/home.html.twig', [
            // 'number' => $number,
        ]);
    }
}

