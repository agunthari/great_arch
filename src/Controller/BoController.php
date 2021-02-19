<?php
// src/Controller/BoController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use App\Form\Type\ArticleType;
use App\Entity\Article;


class BoController extends AbstractController
{
	/**
     * @Route("/bo", name="bo__dashboard")
     */
    public function dashboard(): Response
    {
        return $this->render('@bo/dashboard.html.twig', [
        ]);
    }

    /**
     * @Route("/bo/article", name="bo__article__list")
     */
    public function article_list(): Response
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();

        return $this->render('@bo/article/list.html.twig', [
        	'collection' => $articles
        ]);
    }

    /**
     * @Route("/bo/article/new", name="bo__article__new")
     */
    public function article_new(Request $request): Response
    {
        $article = new Article();

        $form = $this->createForm(ArticleType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $this->getDoctrine()->getManager()->persist($article);
            $this->getDoctrine()->getManager()->flush();
            return $this->redirectToRoute('bo__article__edit', ['article' => $article->getId()]);
        }

        return $this->render('@bo/article/edit.html.twig', [
            'item' => $article,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/bo/article/{article}", name="bo__article__edit")
     */
    public function article_edit(Request $request, Article $article): Response
    {
        $form = $this->createForm(ArticleType::class, $article);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $this->getDoctrine()->getManager()->flush();
        }

        return $this->render('@bo/article/edit.html.twig', [
        	'item' => $article,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/bo/article/{article}/delete", name="bo__article__delete")
     */
    public function article_delete(Article $article): Response
    {
        return $this->render('@bo/article/edit.html.twig', [
        	'item' => $article
        ]);
    }
}

