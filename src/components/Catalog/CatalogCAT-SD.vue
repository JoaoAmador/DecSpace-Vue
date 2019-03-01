<template>
  <v-app id="inspire">
    <v-toolbar  class="white--text" color="light-blue" dark tabs >
      <router-link a style="text-decoration:none;"   to="/method-catalog"> <v-btn flat><v-icon>arrow_back</v-icon></v-btn></router-link>
      <v-toolbar-title id="cattitle">CAT-SD</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs
        centered
        color="light-blue"
        slot="extension"
        slider-color="yellow"
        v-model="model"
      >
        <v-tab
          v-for="item in items"
          :key="item.id"
          :href="`#tab-${item.id}`"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="model">
      <v-tab-item
        v-for="item in items"
        :key="item.id"
        :id="`tab-${item.id}`"
      >
        <v-card v-if="item.id === 1"flat>
          <v-card-text>CAT-SD (from CATegorization by Similarity-Dissimilarity) is a multiple criteria decision aiding method for nominal classification problems, where the categories are pre-defined and no order exists among them.
            The CAT-SD method is based on the concepts of similarity and dissimilarity between two actions, considering possible interactions (or dependencies) between criteria. Each action (or alternative), assessed according to multiple criteria, is assigned to at least one category.
            Actions are compared against reference actions, which characterize the nominal categories. Therefore, the assignment of an action depends on such a comparison.
            Membership degrees allow an action to be assigned to the most adequate category or categories. Application of this method must follow a decision aiding co-constructive approach: the analyst and the decision-maker interact during the process of constructing a model.</v-card-text>
        </v-card>


        <v-card v-if="item.id === 2"flat>
          <v-card-text><strong>Criteria</strong></v-card-text>
          <v-data-table id="table"
                        :headers="headers"
                        :items="table1"
                        hide-actions
                        class="elevation-5"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.date }}</td>
            </template>
          </v-data-table>
          <br>

        <!-- Scales -->
        <p class = 'header-5'>Scales</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center'>Criterion</th>
            <th class = 'text-center'>Type</th>
            <th class = 'text-center'>Minimum Value</th>
            <th class = 'text-center'>Maximum Value</th>
            <th class = 'text-center'>Number of Levels</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Physical Fitness</td>
            <td>Cardinal</td>
            <td>370</td>
            <td>1281</td>
            <td class = 'active'></td>
          </tr>
          <tr>
            <td>Mental Sharpness</td>
            <td>Cardinal</td>
            <td>35</td>
            <td>99</td>
            <td class = 'active'></td>
          </tr>
          <tr>
            <td>Mental Resilience</td>
            <td>Ordinal</td>
            <td class = 'active'></td>
            <td class = 'active'></td>
            <td>4</td>
          </tr>
          <tr>
            <td>Intelligence</td>
            <td>Ordinal</td>
            <td class = 'active'></td>
            <td class = 'active'></td>
            <td>7</td>
          </tr>
          <tr>
            <td>Teamwork Skills</td>
            <td>Ordinal</td>
            <td class = 'active'></td>
            <td class = 'active'></td>
            <td>7</td>
          </tr>
          <tr>
            <td>Motivation</td>
            <td>Ordinal</td>
            <td class = 'active'></td>
            <td class = 'active'></td>
            <td>7</td>
          </tr>
          </tbody>
        </table>

        <!-- Functions -->
        <p class = 'header-5'>Functions</p>

        <!-- Criterion: Physical Fitness -->
        <p class = 'header-6'>Physical Fitness</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center col-md-6'>Function</th>
            <th class = 'text-center col-md-6'>Condition</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><p math-jax-bind = '"1"'></p></td>
            <td><p math-jax-bind = '"abs(x-y)<=50"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"(100-abs(x-y))/50"'></p></td>
            <td><p math-jax-bind = '"50<abs(x-y) and abs(x-y)<=100"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"0"'></p></td>
            <td><p math-jax-bind = '"100<abs(x-y) and abs(x-y)<=150"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"(150-abs(x-y))/50"'></p></td>
            <td><p math-jax-bind = '"150<abs(x-y) and abs(x-y)<=200"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"-1"'></p></td>
            <td><p math-jax-bind = '"abs(x-y)>200"'></p></td>
          </tr>
          </tbody>
        </table>

        <!-- Criterion: Mental Sharpness -->
        <p class = 'header-6'>Mental Sharpness</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center col-md-6'>Function</th>
            <th class = 'text-center col-md-6'>Condition</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><p math-jax-bind = '"1"'></p></td>
            <td><p math-jax-bind = '"abs(x-y)<=5"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"(10-abs(x-y))/5"'></p></td>
            <td><p math-jax-bind = '"5<abs(x-y) and abs(x-y)<=10"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"0"'></p></td>
            <td><p math-jax-bind = '"(y-20<x and x<=y-10) or (y+10<x and x<=y+15)"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"(x-y+20)/5"'></p></td>
            <td><p math-jax-bind = '"y-25<x and x<=y-20"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"(-(x-y)+15)/5"'></p></td>
            <td><p math-jax-bind = '"y+15<x and x<=y+20"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"-1"'></p></td>
            <td><p math-jax-bind = '"x<=y-25 or x>=y+20"'></p></td>
          </tr>
          </tbody>
        </table>

        <!-- Criterion: Mental Resilience -->
        <p class = 'header-6'>Mental Resilience</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center col-md-6'>Function</th>
            <th class = 'text-center col-md-6'>Condition</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><p math-jax-bind = '"1"'></p></td>
            <td><p math-jax-bind = '"x=y"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"-1"'></p></td>
            <td><p math-jax-bind = '"abs(x-y)>=1"'></p></td>
          </tr>
          </tbody>
        </table>

        <!-- Criterion: Intelligence -->
        <p class = 'header-6'>Intelligence</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center col-md-6'>Function</th>
            <th class = 'text-center col-md-6'>Condition</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><p math-jax-bind = '"1"'></p></td>
            <td><p math-jax-bind = '"x=y"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"0"'></p></td>
            <td><p math-jax-bind = '"abs(x-y)=1"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"-1"'></p></td>
            <td><p math-jax-bind = '"abs(x-y)>=2"'></p></td>
          </tr>
          </tbody>
        </table>

        <!-- Criterion: Teamwork Skills -->
        <p class = 'header-6'>Teamwork Skills</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center col-md-6'>Function</th>
            <th class = 'text-center col-md-6'>Condition</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><p math-jax-bind = '"1"'></p></td>
            <td><p math-jax-bind = '"x=y"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"0"'></p></td>
            <td><p math-jax-bind = '"abs(x-y)=1"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"-1"'></p></td>
            <td><p math-jax-bind = '"abs(x-y)>=2"'></p></td>
          </tr>
          </tbody>
        </table>

        <!-- Criterion: Motivation -->
        <p class = 'header-6'>Motivation</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center col-md-6'>Function</th>
            <th class = 'text-center col-md-6'>Condition</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><p math-jax-bind = '"1"'></p></td>
            <td><p math-jax-bind = '"x=y"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"0"'></p></td>
            <td><p math-jax-bind = '"abs(x-y)=1"'></p></td>
          </tr>
          <tr>
            <td><p math-jax-bind = '"-1"'></p></td>
            <td><p math-jax-bind = '"abs(x-y)>=2"'></p></td>
          </tr>
          </tbody>
        </table>

        <!-- Example of Actions -->
        <p class = 'header-5'>Actions</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center'>Action Name</th>
            <th class = 'text-center'>Physical Fitness</th>
            <th class = 'text-center'>Mental Sharpness</th>
            <th class = 'text-center'>Mental Resilience</th>
            <th class = 'text-center'>Intelligence</th>
            <th class = 'text-center'>Teamwork Skills</th>
            <th class = 'text-center'>Motivation</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>a1</td>
            <td>740</td>
            <td>74</td>
            <td>4</td>
            <td>7</td>
            <td>4</td>
            <td>6</td>
          </tr>
          <tr>
            <td>a2</td>
            <td>950</td>
            <td>82</td>
            <td>2</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
          </tr>
          <tr>
            <td>a3</td>
            <td>720</td>
            <td>58</td>
            <td>3</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>a4</td>
            <td>920</td>
            <td>78</td>
            <td>2</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>a5</td>
            <td>850</td>
            <td>66</td>
            <td>3</td>
            <td>5</td>
            <td>6</td>
            <td>5</td>
          </tr>
          <tr>
            <td>a6</td>
            <td>1100</td>
            <td>70</td>
            <td>4</td>
            <td>5</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>a7</td>
            <td>710</td>
            <td>73</td>
            <td>3</td>
            <td>6</td>
            <td>5</td>
            <td>6</td>
          </tr>
          </tbody>
        </table>

        <!-- Example of Categories -->
        <p class = 'header-5'>Categories</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center' rowspan = '2'>Category</th>
            <th class = 'text-center' rowspan = '2'>Membership Degree</th>
            <th class = 'text-center' colspan = '6'>Criteria Weights</th>
          </tr>
          <tr>
            <th class = 'text-center'>Physical Fitness</th>
            <th class = 'text-center'>Mental Sharpness</th>
            <th class = 'text-center'>Mental Resilience</th>
            <th class = 'text-center'>Intelligence</th>
            <th class = 'text-center'>Teamwork Skills</th>
            <th class = 'text-center'>Motivation</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Snipers</td>
            <td>0.75</td>
            <td>10</td>
            <td>15</td>
            <td>20</td>
            <td>20</td>
            <td>5</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Breachers</td>
            <td>0.60</td>
            <td>25</td>
            <td>15</td>
            <td>20</td>
            <td>5</td>
            <td>10</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Communications Operators</td>
            <td>0.65</td>
            <td>10</td>
            <td>20</td>
            <td>15</td>
            <td>20</td>
            <td>15</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Heavy Weapons Operators</td>
            <td>0.60</td>
            <td>25</td>
            <td>5</td>
            <td>15</td>
            <td>5</td>
            <td>20</td>
            <td>10</td>
          </tr>
          </tbody>
        </table>

        <!-- Example of Reference Actions -->
        <p class = 'header-5'>Reference Actions</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <th class = 'text-center'>Category</th>
          <th class = 'text-center'>Physical Fitness</th>
          <th class = 'text-center'>Mental Sharpness</th>
          <th class = 'text-center'>Mental Resilience</th>
          <th class = 'text-center'>Intelligence</th>
          <th class = 'text-center'>Teamwork Skills</th>
          <th class = 'text-center'>Motivation</th>
          </thead>
          <tbody>
          <tr>
            <td>Snipers (b11)</td>
            <td>700</td>
            <td>80</td>
            <td>4</td>
            <td>6</td>
            <td>4</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Snipers (b12)</td>
            <td>750</td>
            <td>75</td>
            <td>4</td>
            <td>7</td>
            <td>4</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Breachers (b21)</td>
            <td>800</td>
            <td>70</td>
            <td>3</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Communications Operators (b31)</td>
            <td>1000</td>
            <td>85</td>
            <td>2</td>
            <td>5</td>
            <td>4</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Communications Operators (b32)</td>
            <td>950</td>
            <td>80</td>
            <td>2</td>
            <td>5</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Heavy Weapons Operators (b41)</td>
            <td>700</td>
            <td>60</td>
            <td>3</td>
            <td>5</td>
            <td>6</td>
            <td>5</td>
          </tr>
          </tbody>
        </table>

        <!-- Example of Interaction Effects -->
        <p class = 'header-5'>Interaction Effects</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center'>Type Of Effect</th>
            <th class = 'text-center'>Criterion 1</th>
            <th class = 'text-center'>Criterion 2</th>
            <th class = 'text-center'>Category</th>
            <th class = 'text-center'>Value</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mutual-Strengthening Effect</td>
            <td>Mental Sharpness</td>
            <td>Mental Resilience</td>
            <td>Snipers</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Mutual-Strengthening Effect</td>
            <td>Mental Sharpness</td>
            <td>Mental Resilience</td>
            <td>Breachers</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Mutual-Strengthening Effect</td>
            <td>Mental Sharpness</td>
            <td>Mental Resilience</td>
            <td>Communications Operators</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Mutual-Strengthening Effect</td>
            <td>Mental Sharpness</td>
            <td>Mental Resilience</td>
            <td>Heavy Weapons Operators</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Mutual-Weakening Effect</td>
            <td>Physical Fitness</td>
            <td>Teamwork Skills</td>
            <td>Snipers</td>
            <td>-4</td>
          </tr>
          <tr>
            <td>Mutual-Weakening Effect</td>
            <td>Physical Fitness</td>
            <td>Teamwork Skills</td>
            <td>Breachers</td>
            <td>-4</td>
          </tr>
          <tr>
            <td>Mutual-Weakening Effect</td>
            <td>Physical Fitness</td>
            <td>Teamwork Skills</td>
            <td>Communication Operators</td>
            <td>-4</td>
          </tr>
          <tr>
            <td>Mutual-Weakening Effect</td>
            <td>Physical Fitness</td>
            <td>Teamwork Skills</td>
            <td>Heavy Weapons Operators</td>
            <td>-4</td>
          </tr>
          <tr>
            <td>Antagonistic Effect</td>
            <td>Physical Fitness</td>
            <td>Intelligence</td>
            <td>Snipers</td>
            <td>-3</td>
          </tr>
          <tr>
            <td>Antagonistic Effect</td>
            <td>Physical Fitness</td>
            <td>Intelligence</td>
            <td>Breachers</td>
            <td>-3</td>
          </tr>
          <tr>
            <td>Antagonistic Effect</td>
            <td>Physical Fitness</td>
            <td>Intelligence</td>
            <td>Communications Operators</td>
            <td>-3</td>
          </tr>
          <tr>
            <td>Antagonistic Effect</td>
            <td>Physical Fitness</td>
            <td>Intelligence</td>
            <td>Heavy Weapons Operators</td>
            <td>-3</td>
          </tr>
          </tbody>
        </table>

        <!-- Example of Results -->
        <p class = 'header-5'>Results</p>

        <p class = 'header-6'>Assigned Categories</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center'>Action Name</th>
            <th class = 'text-center'>Snipers</th>
            <th class = 'text-center'>Breachers</th>
            <th class = 'text-center'>Communications Operators</th>
            <th class = 'text-center'>Heavy Weapons Operators</th>
            <th class = 'text-center'>Not Assigned</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>a1</td>
            <td><span class = 'glyphicon glyphicon-ok' style = 'color: green'></span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>a2</td>
            <td></td>
            <td></td>
            <td><span class = 'glyphicon glyphicon-ok' style = 'color: green'></span></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>a3</td>
            <td></td>
            <td></td>
            <td></td>
            <td><span class = 'glyphicon glyphicon-ok' style = 'color: green'></span></td>
            <td></td>
          </tr>
          <tr>
            <td>a4</td>
            <td></td>
            <td></td>
            <td><span class = 'glyphicon glyphicon-ok' style = 'color: green'></span></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>a5</td>
            <td></td>
            <td><span class = 'glyphicon glyphicon-ok' style = 'color: green'></span></td>
            <td></td>
            <td><span class = 'glyphicon glyphicon-ok' style = 'color: green'></span></td>
            <td></td>
          </tr>
          <tr>
            <td>a6</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span class = 'glyphicon glyphicon-ok' style = 'color: green'></span></td>
          </tr>
          <tr>
            <td>a7</td>
            <td></td>
            <td><span class = 'glyphicon glyphicon-ok' style = 'color: green'></span></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>

        <p class = 'header-6'>Similarity Values Per Reference Action</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center'>Action</th>
            <th class = 'text-center'>b11</th>
            <th class = 'text-center'>b12</th>
            <th class = 'text-center'>b21</th>
            <th class = 'text-center'>b31</th>
            <th class = 'text-center'>b32</th>
            <th class = 'text-center'>b41</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>a1</td>
            <td>0.7415730337078652</td>
            <td>0.8351648351648352</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>a2</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0.7916666666666666</td>
            <td>0.6875</td>
            <td>0</td>
          </tr>
          <tr>
            <td>a3</td>
            <td>0</td>
            <td>0</td>
            <td>0.375</td>
            <td>0</td>
            <td>0</td>
            <td>0.7777777777777778</td>
          </tr>
          <tr>
            <td>a4</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0.59375</td>
            <td>0.85</td>
            <td>0</td>
          </tr>
          <tr>
            <td>a5</td>
            <td>0</td>
            <td>0</td>
            <td>0.8837209302325582</td>
            <td>0</td>
            <td>0</td>
            <td>0.7045454545454546</td>
          </tr>
          <tr>
            <td>a6</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>a7</td>
            <td>0</td>
            <td>0</td>
            <td>0.6666666666666666</td>
            <td>0</td>
            <td>0</td>
            <td>0.5</td>
          </tr>
          </tbody>
        </table>

        <p class = 'header-6'>Maximum Similarity Values Per Category</p>

        <table class = 'table table-bordered table-hover'>
          <thead>
          <tr>
            <th class = 'text-center'>Action</th>
            <th class = 'text-center'>Snipers</th>
            <th class = 'text-center'>Breachers</th>
            <th class = 'text-center'>Communication Operators</th>
            <th class = 'text-center'>Heavy Weapons Operators</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>a1</td>
            <td>0.8351648351648352</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>a2</td>
            <td>0</td>
            <td>0</td>
            <td>0.7916666666666666</td>
            <td>0</td>
          </tr>
          <tr>
            <td>a3</td>
            <td>0</td>
            <td>0.375</td>
            <td>0</td>
            <td>0.7777777777777778</td>
          </tr>
          <tr>
            <td>a4</td>
            <td>0</td>
            <td>0</td>
            <td>0.85</td>
            <td>0</td>
          </tr>
          <tr>
            <td>a5</td>
            <td>0</td>
            <td>0.8837209302325582</td>
            <td>0</td>
            <td>0.7045454545454546</td>
          </tr>
          <tr>
            <td>a6</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>a7</td>
            <td>0</td>
            <td>0.6666666666666666</td>
            <td>0</td>
            <td>0.5</td>
          </tr>
          </tbody>
        </table>
        </v-card>

        <v-card v-if="item.id === 3"flat>
          <template>
            <v-stepper  v-model="e1">
              <v-stepper-header>
                <v-stepper-step step="1" :complete="e1 > 1">Import "CAT-SD" Method</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2" :complete="e1 > 2">Fill in the Data</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3" :complete="e1 > 3">Run the Workflow</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="4">Check Results</v-stepper-step>
                <v-divider></v-divider>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card color="grey lighten-1" class="mb-5" height="200px" ></v-card>
                  <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
                  <v-subheader></v-subheader>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                  <v-btn color="primary" @click.native="e1 = 1">Back</v-btn>
                  <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
                  <v-subheader></v-subheader>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"> </v-card>
                  <v-btn color="primary" @click.native="e1 = 2">Back</v-btn>
                  <v-btn color="primary" @click.native="e1 = 4">Continue</v-btn>
                  <v-subheader></v-subheader>
                </v-stepper-content>
                <v-stepper-content step="4">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                  <v-btn color="primary" @click.native="e1 = 3">Back</v-btn>
                  <v-btn color="red  white--text" @click.native="e1 = 1">Finish</v-btn>
                  <v-subheader></v-subheader>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </template>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-app>
</template>


<script>
  export default {
    data () {
      return {
        e1: 0,
        model: 'tab-1',
        items: [
          {
            title: "Description",
            id: 1
          },
          {
            title: "Example",
            id: 2
          },
          {
            title: "Step by Step",
            id: 3
          }
        ],
        headers: [
          {
            text: 'Name',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'Direction', align: 'left',sortable: false, value: 'date' }
        ],
        table1: [
          {
            name: 'Physical Fitness',
            date: 'Minimize',
          },
          {
            name: 'Mental Sharpness',
            date: 'Maximize',
          },
          {
            name: 'Mental Resilience',
            date: 'Maximize',
          },
          {
            name: 'Intelligence',
            date: 'Maximize',
          },
          {
            name: 'Teamwork Skills',
            date: 'Maximize',
          },
          {
            name: 'Motivation',
            date: 'Maximize',
          }
        ],
      }
    }
  }
</script>

<style>
  #header {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #cattitle {
    justify-content: flex-start !important;
    max-width: 1500px;
    width: 80%;
  }
</style>
