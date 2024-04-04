---
affiliation: Progressive Insurance
author:
- Matthias Quinn
categories:
- code
- statistics
code-copy: true
date: 2022-08-12
description: This post is a walkthrough of a structural equation model
  in R.
image: lavaan.png
image-alt: Lavaan in R
progress: true
title: Structural Equation Modelling
title-block-banner: "#FFAC1C"
title-block-banner-color: body
toc-location: right
toc-title: Table of contents
---

::: columns
::: {.column width="40%"}
## GOAL

Learn how to create and interpret structural equation models using R's
lavaan.
:::

::: {.column width="10%"}
```{=html}
<!-- empty column to create gap -->
```
:::

::: {.column width="40%"}
## RESULT

**WiP**
:::
:::

Structural Equation Models (SEM) help to model the dependence
relationships among multiple variables, simultaneously. In other words,
we can model not only multiple variables, but each of those dependent
variables can have multiple covariates attached to them.

### Software

There are a plethora of options available to create SEMs. Here are just
a few of them:

1.  [lavaan](https://lavaan.ugent.be/)
2.  [MPlus](https://www.statmodel.com/)
3.  [SAS](https://documentation.sas.com/doc/en/statug/15.2/statug_calis_overview09.htm)
4.  [Stata](https://www.stata.com/features/structural-equation-modeling/)

This project will use the **lavaan** library. If you don't have it
installed, simply run the following command in your IDE of choice:

::: {.cell hash="SEM-Indices_cache/markdown/unnamed-chunk-1_e38a9e9e2f5ee7818ec6b01b222c937c"}
``` {.r .cell-code}
# install.packages("lavaan", dependencies=TRUE)
library(lavaan)
```

::: {.cell-output .cell-output-stderr}
    This is lavaan 0.6-16
    lavaan is FREE software! Please report any bugs.
:::
:::

BTW, this walk-through is my interpretation of the fantastic
[guide](https://stats.oarc.ucla.edu/r/seminars/rsem/) created by UCLA.

### Introduction

Structural equation modeling is a linear model framework that models
concrete regression equations with latent variables.

### Motivating Example

Suppose you are a researcher studying the effects of student background
on academic achievement. The lab recently finished collecting and
uploading the dataset
([worland5.csv](https://stats.idre.ucla.edu/wp-content/uploads/2021/02/worland5.csv))
of $N= 500$ students with $9$ observed variables for each student. The
principal investigator hypothesizes three latent constructs Adjustment,
Risk, Achievement measured with its corresponding to the following
codebook mapping:

**Adjustment:**

-   motiv Motivation

-   harm Harmony

-   stabi Stability

**Risk:**

-   ppsych (Negative) Parental Psychology

-   ses Socio-economic Status

-   verbal Verbal IQ

**Achievement:**

-   read Reading

-   arith Arithmetic

-   spell Spelling

Here's how to download and load the dataset into R:

::: {.cell hash="SEM-Indices_cache/markdown/unnamed-chunk-2_f46d5283eba30065d7caee3c2eca6392"}
``` {.r .cell-code}
dat <- read.csv("https://stats.idre.ucla.edu/wp-content/uploads/2021/02/worland5.csv")
```
:::

<div>

> **Key**
>
> The most essential component of a structural equation model is
> **covariance** or the statistical relationship between items. The true
> population covariance, denoted $\Sigma$, is called the
> variance-covariance matrix. Since you don't ever know the true
> $\Sigma$, you can estimate it with your sample data. We call this the
> sample variance-covariance matrix, or $\hat{\Sigma}$.

</div>

The variance-covariance matrix $\Sigma$ should not be confused with
$\Sigma(\theta)$ which is the model. However, if the model fits
perfectly, then $\Sigma = \Sigma(\theta)$.

<div>

> **Note**
>
> Running the **cov** command in R allows us to obtain the population
> variance-covariance matrix $\Sigma$?
>
> *Answer*: False, the `cov` command obtains the sample, or $S$.

</div>

### Definitions

-   **observed variable:** a variable that exists in the data, a.k.a
    **item** or manifest variable

```{=html}
<!-- -->
```
-   **latent variable:** a variable that is constructed and does not
    exist in the data

-   **exogenous variable:** an independent variable either observed (x)
    or latent ($\Xi$) that explains an endogenous variable

-   **endogenous variable:** a dependent variable, either observed (y)
    or latent ($\eta$) that has a causal path leading to it

-   **measurement model:** a model that links observed variables with
    latent variables

-   **indicator:** an observed variable in a measurement model (can be
    exogenous or endogenous)

-   **factor**: a latent variable defined by its indicators (can be
    exogenous or endogenous)

-   **loading:** a path between an indicator and a factor

-   **structural model:** a model that specifies causal relationships
    among exogenous variables to endogenous variables (can be observed
    or latent)

-   **regression path:** a path between exogenous and endogenous
    variables (can be observed or latent)

-   $x_1$, a single exogenous variable

-   $y_1$, single endogenous variable

-   $\beta_0, \alpha_1$, intercept of $y_1$, "alpha"

-   $\beta_1, \gamma_1$, regression coefficient, "gamma"

-   $\phi$, variance or covariance of the exogenous variable, "phi"

-   $\psi$, residual variance or covariance of the endogenous variable,
    "psi"

### The path model

![Copyright UCLA](Path%20Diagram%20Legend.png)

### lavaan syntax

Before running our first regression analysis, let us introduce some of
the most frequently used syntax in **`lavaan`**

-   **`~`** **predict**, used for regression of observed outcome to
    observed predictors (e.g., **`y ~ x`**)

-   **`=~`** **indicator**, used for latent variable to observed
    indicator in factor analysis measurement models (e.g.,
    **`f =~ q + r + s`**)

-   **`~~`** **covariance** (e.g., **`x ~~ x`**)

-   **`~1`** **intercept** or mean (e.g., **`x ~ 1`** estimates the mean
    of variable **`x`**)

-   **`1*`** **fixes** **parameter** or loading to one (e.g.,
    **`f =~ 1*q`**)

-   **`NA*`** **frees** **parameter** or loading (useful to override
    default marker method, (e.g., **`f =~ NA*q`**)

-   **`a*`** **labels** the **parameter** 'a', used for model
    constraints (e.g., **`f =~ a*q`**)

### Simple regression

Simple regression models the relationship of an observed exogenous
variable on a single observed endogenous variable. For a single subject,
the simple linear regression equation is most commonly defined as:

$$
y_1 = \beta_0 + \beta_1x_1 + \epsilon_1
$$

![Copyright UCLA](UCLA%20-%20Model%201A.png){fig-align="center"}

In R, the most basic way to run a linear regression is to use the `lm()`
function:

::: {.cell hash="SEM-Indices_cache/markdown/unnamed-chunk-3_505e382d082f4387eb546c9a1ac21425"}
``` {.r .cell-code}
#simple regression using lm()
m1a <- lm(read ~ motiv, data=dat)
(fit1a <-summary(m1a))
```

::: {.cell-output .cell-output-stdout}

    Call:
    lm(formula = read ~ motiv, data = dat)

    Residuals:
         Min       1Q   Median       3Q      Max 
    -26.0995  -6.1109   0.2342   5.2237  24.0183 

    Coefficients:
                  Estimate Std. Error t value Pr(>|t|)    
    (Intercept) -1.232e-07  3.796e-01    0.00        1    
    motiv        5.300e-01  3.800e-02   13.95   <2e-16 ***
    ---
    Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1

    Residual standard error: 8.488 on 498 degrees of freedom
    Multiple R-squared:  0.2809,    Adjusted R-squared:  0.2795 
    F-statistic: 194.5 on 1 and 498 DF,  p-value: < 2.2e-16
:::
:::

The predicted mean of **`read`** is $0$ for a student with
**`motiv`**=$0$ and for a one unit increase in motivation, the reading
score improves $0.530$ points. Make special note of the residual
standard error which is 8.488. The square of that $8.4882=72.04$ is the
residual variance, which we will see later in **`lavaan()`**. We can run
the equivalent code in lavaan. The syntax is very similar to **`lm()`**
in that **`read ~ motiv`** specifies the predictor **`motiv`** on the
outcome **`read`**. However, by default the intercept is not included in
the output but is implied. If we want to add an intercept, we need to
include **`read ~ 1 + motiv`**. Optionally, you can request the variance
of **`motiv`** using **`motiv ~~ motiv`**. If this syntax is not
provided, the parameter is still estimated but just implied.

::: {.cell hash="SEM-Indices_cache/markdown/unnamed-chunk-4_3cbc994df72fc8e90cfeea6afeaa8565"}
``` {.r .cell-code}
library(lavaan)

#simple regression using lavaan 
modelOne <- "
  # regressions
    read ~ 1 + motiv
  # variance (optional)
    motiv ~~ motiv
"
fitOne <- sem(modelOne, data=dat)

summary(fitOne)
```

::: {.cell-output .cell-output-stdout}
    lavaan 0.6.16 ended normally after 8 iterations

      Estimator                                         ML
      Optimization method                           NLMINB
      Number of model parameters                         5

      Number of observations                           500

    Model Test User Model:
                                                          
      Test statistic                                 0.000
      Degrees of freedom                                 0

    Parameter Estimates:

      Standard errors                             Standard
      Information                                 Expected
      Information saturated (h1) model          Structured

    Regressions:
                       Estimate  Std.Err  z-value  P(>|z|)
      read ~                                              
        motiv             0.530    0.038   13.975    0.000

    Intercepts:
                       Estimate  Std.Err  z-value  P(>|z|)
       .read             -0.000    0.379   -0.000    1.000
        motiv             0.000    0.447    0.000    1.000

    Variances:
                       Estimate  Std.Err  z-value  P(>|z|)
        motiv            99.800    6.312   15.811    0.000
       .read             71.766    4.539   15.811    0.000
:::
:::

Notice how the intercept of `read (0.000)` and the regression
coefficient of `read ~ motiv (0.530)` matches the output of the linear
model, with small rounding errors. The intercept for `motiv (0.000)`
does not have a `.` and neither does its variance of $99.80$, meaning
that it's an exogenous mean and variance.

Also, an important piece of output is that the estimator of use is
**M.L.**, also known as **Maximum Likelihood**. The `lm()` function uses
the least squares estimator.

<div>

> **Small Note**
>
> The `.` in front of the parameter denotes an endogenous variable under
> intercepts and a residual variance if it's under Variances or
> Co-variances.

</div>

### Maximum Likelihood vs. Least Squares Estimators

For **least squares**, the estimate for the residual variance is:

$$
\hat{\sigma}^2_{LS} = \frac{\sum_{i=1}^{N} \hat{\zeta_i}^2}{N-k}
$$

where $N$ is the sample size and $k$ is the number of predictors $+1$
for the intercept. For **maximum likelihood**, the estimate for the
residual variance is:

$$
\hat{\sigma}^2_{ML} = \frac{\sum_{i=1}^{N} \hat{\zeta_i}^2}{N}
$$

Here is the conversion between the two methods for the residual
variance:

$$
\hat{\sigma}^2_{ML} = \left(\frac{N-k}{n}\right) \hat{\sigma}^2_{LS}
$$

You can tell *lavaan* to use a generalized least squares estimator by
calling `estimator=GLS` in the fit function.
