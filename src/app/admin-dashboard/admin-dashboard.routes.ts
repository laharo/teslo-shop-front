import { Routes } from "@angular/router";
import { AdminDashboardLayoutsComponent } from "./layouts/admin-dashboard-layouts/admin-dashboard-layouts.component";
import { ProductsAdminPageComponent } from "./pages/products-admin-page/products-admin-page.component";
import { ProductAdminPageComponent } from "./pages/product-admin-page/product-admin-page.component";
import { isAdminGuard } from "@auth/guards/is-admin.guard";


export const adminDashboardRoutes: Routes = [
  {
    path: '',
    component: AdminDashboardLayoutsComponent,
    canMatch: [isAdminGuard],
    children: [
      {
        path: 'products',
        component: ProductsAdminPageComponent,
      },
      {
        path: 'product/:id',
        component: ProductAdminPageComponent,
      },
      {
        path: '**',
        redirectTo: 'products',
      },
    ],
  },
];

export default adminDashboardRoutes;

