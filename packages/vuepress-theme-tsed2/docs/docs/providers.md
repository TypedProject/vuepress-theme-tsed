---
meta:
 - name: description
   content: Documentation over Providers / DI provided by Ts.ED framework. Use providers to build your backend services.
 - name: keywords
   content: providers di ioc ts.ed express typescript node.js javascript decorators jsonschema class models
---
# Providers

Basically, almost everything may be considered as a provider – service, factory, interceptors, and so on. 
All of them can inject dependencies, meaning, they can create various relationships with each other.
 But in fact, a provider is nothing else than just a simple class annotated with an `@Injectable()` decorator.
 
<figure><img src="./../assets/providers.png" style="max-height: 300px"></figure>

In controllers chapter, we've seen how to build a Controller, handle a request and create a response.
Controllers shall handle HTTP requests and delegate complex tasks to the **providers**.

The providers are plain javascript class and use one of these decorators on top of them. Here the list:

<ApiList query="['Injectable', 'Module', 'Service', 'Controller', 'Interceptor', 'Converter', 'Middleware', 'Filter', 'Protocol'].indexOf(symbolName) > -1" />

## Services

Let's start by creating a simple CalendarService provider. 

<<< @/docs/docs/snippets/providers/getting-started-service.ts

::: tip Note
@@Service@@ and @@Injectable@@ have the same effect. @@Injectable@@ accepts options, @@Service@@ does not.
A Service is always configured as `singleton`.

Example with @@Injectable@:

<<< @/docs/docs/snippets/providers/getting-started-injectable.ts

:::

Now we have the service class already done, let's use it inside the `CalendarCtrl`:

<<< @/docs/docs/snippets/providers/getting-started-controller.ts

Finally, we can load the injector and use it:

<<< @/docs/docs/snippets/providers/getting-started-serverloader.ts

## Dependency injection

Ts.ED is built around the **dependency injection** pattern. TypeScript emits type metadata on the constructor
which will be exploited by the @@InjectorService@@ to resolve dependencies automatically.

```typescript
constructor(private calendarsService: CalendarsService) {}
```

## Scopes

All providers have a lifetime strictly dependent on the application lifecycle.
Once the server is created, all providers have to be instantiated. 
Similarly, when the application shuts down, all providers will be destroyed. 
However, there are ways to make your provider lifetime **request-scoped** as well. 
You can read more about these techniques [here](/docs/injection-scopes.md).

## Binding configuration

All configurations set with @@ServerSettings@@, @@Module@@ or @@Configuration@@ can be retrieved with 
@@Constant@@ and @@Value@@ decorators. Theses decorators can be used with:
 
 - [Service](/docs/services.md),
 - [Controller](/docs/controllers.md),
 - [Middleware](/docs/middlewares.md),
 - [Filter](/docs/filters.md)
 - [Converter](/docs/converters.md).
 
@@Constant@@ and @@Value@@ accept an expression as parameter to
inspect the configuration object and return the value.

<<< @/docs/docs/snippets/providers/binding-configuration.ts

::: warning
@@Constant@@ returns an Object.freeze() value.
:::

::: tip NOTE
The values for the decorated properties aren't available on constructor. Use $onInit() hook to use the value.
:::

## Custom providers

The Ts.ED IoC resolves relationships providers for you, but sometimes, you want to tell to the DI how you want to instantiate
a specific service or inject different kind of providers based on values, on asynchronous or synchronous factory or on external library.
Look [here](/docs/custom-providers.md) to find more examples.

## Override provider

Any provider (Provider, Service, Controller, Middleware, etc...) already registered by Ts.ED or third-party can be overridden by your own class.

<<< @/docs/docs/snippets/providers/override-provider.ts

> Just don't forgot to import your provider in your project !

## Configurable provider <Badge text="v5.58.0+" />

Sometimes you need to inject a provider with a specific configuration to another one.

This is possible with the combination of @@Opts@@ and @@UseOpts@@ decorators.

<<< @/docs/docs/snippets/providers/configurable-provider.ts

::: warning
Using @@Opts@@ decorator on a constructor parameter changes the scope of the provider to `ProviderScope.INSTANCE`.
:::
