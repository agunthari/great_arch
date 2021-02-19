<?php
// src/Controller/RfRevuesController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\Article;


class RfRevuesController extends AbstractController
{
	/**
     * @Route("/revues", name="rf_revues__home")
     */
    public function home(): Response
    {
        // $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();
    	
        return $this->render('@app/pages/rf_revues/home.html.twig', [
            // 'actu_list' => $articles
        ]);
    }

    /**
     * @Route("/revues/feuillet-hebdo", name="rf_revues__fh")
     */
    public function fh(): Response
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();
    	
        return $this->render('@app/pages/rf_revues/rf_revues__fh.html.twig', [
            'actu_list' => $articles
        ]);
    }

    /**
     * @Route("/revues/rf-comptable", name="rf_revues__comptable")
     */
    public function comptable(): Response
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findBy(['category'=>'Comptable']);
    	
        return $this->render('@app/pages/rf_revues/rf_revues__comptable.html.twig', [
            'actu_list' => $articles
        ]);
    }

    /**
     * @Route("/revues/rf-social", name="rf_revues__social")
     */
    public function social(): Response
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findBy(['category'=>'Social']);
    	
        return $this->render('@app/pages/rf_revues/rf_revues__social.html.twig', [
            'actu_list' => $articles
        ]);
    }

    /**
     * @Route("/revues/rf-paye", name="rf_revues__paye")
     */
    public function paye(): Response
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findBy(['category'=>'Paye']);
    	
        return $this->render('@app/pages/rf_revues/rf_revues__paye.html.twig', [
            'actu_list' => $articles
        ]);
    }

}
