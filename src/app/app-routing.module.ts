import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from "app/components/calculator/calculator.component";
import { Resus_DrugComponent } from "app/components/resus_drug/resus_drug.component";
import { IntubationComponent } from "app/components/intubation/intubation.component";
import { InfusionComponent } from "app/components/infusion/infusion.component";
import { FluidComponent } from "app/components/fluids/fluids.component";
import { ArrythmiasComponent } from "app/components/Arrythmias/arrythmias.component";
import { CommonComponent } from "app/components/common/common.component";

const routes: Routes = [

    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: CalculatorComponent
    },
    {
        path: 'common',
        component: CommonComponent,
        children:[            
            {
                path: 'resus_drug',
                component: Resus_DrugComponent
            },
            {
                path: 'intubation',
                component: IntubationComponent
            },
            {
                path: 'infusion',
                component: InfusionComponent
            },
            {
                path: 'fluid',
                component: FluidComponent
            },
            {
                path: 'arrythmias',
                component: ArrythmiasComponent
            }
        ]
    }
    
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
