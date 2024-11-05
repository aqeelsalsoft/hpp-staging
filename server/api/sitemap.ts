export default defineSitemapEventHandler(async (e) => {
  const config = useRuntimeConfig().public;
  const categoriesURL = `${config.apiURL}/categories`;
  const productsURL = `${config.apiURL}/products`;
  const packagingURL = `${config.apiURL}/primary-products`;
  const blogsURL = `${config.apiURL}/articles`;
  const infoURL = `${config.apiURL}/get-info-pages?type=info-page`;

  try {
    const [res, products, packaging, posts, infoPages] = await Promise.all([
      $fetch(categoriesURL).catch(() => ({ categories: [] })),
      $fetch(productsURL).catch(() => []),
      $fetch(packagingURL).catch(() => []),
      $fetch(blogsURL).catch(() => []),
      $fetch(infoURL).catch(() => []),
    ]);

    const categoryPaths = res.categories.map((category) => ({
      loc: category.type == 0 ? `/industry/${category.slug}` : `/${category.slug}`,
      lastmod: new Date(category.created_at),
    }));

    const productPaths = products.map((product) => ({
      loc: `/${product.primary_industry}/${product.slug}`,
      lastmod: new Date(product.created_at),
    }));

    // const packagingPaths = packaging.map((packageItem) => ({
    //   loc: `/primary-packaging/${packageItem.slug}`,
    //   lastmod: new Date(packageItem.createdAt),
    // }));

    const blogPaths = posts.map((p) => ({
      loc: `/blog/${p.slug}`,
      lastmod: new Date(p.updatedAt || p.createdAt),
    }));

    const infoPaths = infoPages.map((p) => ({
      loc: `/knowledge/${p.page}`,
    }));

    return [
      ...categoryPaths,
      ...productPaths,
      // ...packagingPaths,
      ...blogPaths,
      ...infoPaths,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
});
