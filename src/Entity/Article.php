<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

use App\Repository\ArticleRepository;
use DateTime;

/**
 * @ORM\Entity(repositoryClass=ArticleRepository::class)
 */
class Article
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Type("string")
     * @Assert\NotBlank
     * @Assert\Length(
     *      min = 10,
     *      max = 255,
     *      minMessage = "Title too short (min {{ limit }})",
     *      maxMessage = "Title too long (max {{ limit }})"
     * )
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=2000)
     * @Assert\Type("string")
     * @Assert\NotBlank
     * @Assert\Length(
     *      min = 10,
     *      max = 2000,
     *      minMessage = "Teaser too short (min {{ limit }})",
     *      maxMessage = "Teaser too long (max {{ limit }})"
     * )
     */
    private $teaser;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\Type("string")
     * @Assert\NotBlank
     */
    private $category;

    /**
     * @ORM\Column(type="datetime")
     * @Assert\Type("\DateTime")
     * @Assert\NotBlank
     */
    private $publication_date;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getTeaser(): ?string
    {
        return $this->teaser;
    }

    public function setTeaser(string $teaser): self
    {
        $this->teaser = $teaser;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getPublicationDate(): ?DateTime
    {
        return $this->publication_date;
    }

    public function setPublicationDate(datetime $publication_date): self
    {
        $this->publication_date = $publication_date;

        return $this;
    }
    
}
