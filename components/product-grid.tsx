"use client";

import * as React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  height: "short" | "medium" | "tall";
}

const products: Product[] = [
  {
    id: "1",
    name: "Пальто оверсайз из шерсти",
    price: 12990,
    originalPrice: 18990,
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=600&fit=crop",
    category: "Верхняя одежда",
    isSale: true,
    height: "tall",
  },
  {
    id: "2",
    name: "Трикотажный свитер",
    price: 4990,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    category: "Свитеры",
    isNew: true,
    height: "short",
  },
  {
    id: "3",
    name: "Джинсы прямого кроя",
    price: 6990,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
    category: "Джинсы",
    height: "medium",
  },
  {
    id: "4",
    name: "Блуза из шёлка",
    price: 7990,
    originalPrice: 9990,
    image:
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=600&fit=crop",
    category: "Блузы",
    isSale: true,
    height: "tall",
  },
  {
    id: "5",
    name: "Кожаная куртка",
    price: 24990,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=450&fit=crop",
    category: "Верхняя одежда",
    isNew: true,
    height: "medium",
  },
  {
    id: "6",
    name: "Базовая футболка",
    price: 1990,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=350&fit=crop",
    category: "Футболки",
    height: "short",
  },
  {
    id: "7",
    name: "Платье миди",
    price: 8990,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
    category: "Платья",
    isNew: true,
    height: "tall",
  },
  {
    id: "8",
    name: "Костюм классический",
    price: 19990,
    originalPrice: 27990,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop",
    category: "Костюмы",
    isSale: true,
    height: "medium",
  },
  {
    id: "9",
    name: "Худи с принтом",
    price: 3990,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    category: "Худи",
    height: "short",
  },
  {
    id: "10",
    name: "Юбка плиссе",
    price: 5490,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a07040?w=400&h=550&fit=crop",
    category: "Юбки",
    isNew: true,
    height: "medium",
  },
  {
    id: "11",
    name: "Тренч бежевый",
    price: 15990,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=650&fit=crop",
    category: "Верхняя одежда",
    height: "tall",
  },
  {
    id: "12",
    name: "Брюки палаццо",
    price: 5990,
    originalPrice: 7990,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=480&fit=crop",
    category: "Брюки",
    isSale: true,
    height: "medium",
  },
];

const heightClasses = {
  short: "row-span-3",
  medium: "row-span-4",
  tall: "row-span-5",
};

const imageHeights = {
  short: "h-48",
  medium: "h-64",
  tall: "h-80",
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}

function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <article
      className={cn(
        "group relative flex flex-col",
        heightClasses[product.height]
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-lg bg-muted flex-1",
          imageHeights[product.height]
        )}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered && "scale-105"
          )}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-foreground text-background text-xs font-medium px-2.5 py-1 rounded">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-600 text-white text-xs font-medium px-2.5 py-1 rounded">
              SALE
            </span>
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background transition-opacity duration-300",
            isHovered || isLiked ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsLiked(!isLiked)}
          aria-label={
            isLiked ? "Удалить из избранного" : "Добавить в избранное"
          }
        >
          <Heart
            className={cn(
              "size-4 transition-colors",
              isLiked && "fill-red-500 text-red-500"
            )}
          />
        </Button>

        <div
          className={cn(
            "absolute inset-x-3 bottom-3 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          <Button className="w-full bg-background/90 text-foreground hover:bg-background backdrop-blur-sm">
            Добавить в корзину
          </Button>
        </div>
      </div>

      <div className="pt-3 flex flex-col gap-1">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="font-medium text-sm leading-tight line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className={cn("font-medium", product.isSale && "text-red-600")}>
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProductGrid() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">
              Популярные товары
            </h2>
            <p className="text-muted-foreground mt-1">
              Выбор наших покупателей
            </p>
          </div>
          <a
            href="/catalog"
            className="text-sm font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            Смотреть все
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[60px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
