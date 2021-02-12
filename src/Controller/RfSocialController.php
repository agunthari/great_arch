<?php
// src/Controller/RfSocialController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class RfSocialController extends AbstractController
{
	/**
     * @Route("/rf-social", name="rf_social__home")
     */
    public function home(): Response
    {
    	return $this->render('pages/rf-social/home.html.twig', [
        ]);
    }


    /**
     * @Route("/rf-social/actu", name="rf_social__actu")
     */
    public function actu(): Response
    {
    	return $this->render('pages/rf-social/actu.html.twig', [
        ]);
    }
}

