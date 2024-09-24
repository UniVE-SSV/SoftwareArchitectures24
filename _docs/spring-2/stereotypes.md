---
title: 1. Stereotypes
category: 04. Java Spring (Part II)
order: 1
---
<h2>Contents</h2>
* toc
{:toc}
## Spring Stereotypes and Spring Beans
In the previos lesson, we mentioned Component. Classes annotated with @Component represent objects that the Spring framework manages. For the ServerPort example, Spring knows that this class represents a Component, and it is Spring's duty to understand where and when to use it. To indicate explicitly the role or purpose of a component, we can use stereotype annotations.
### Stereotype Component Annotations
Stereotype Annotation is specialized annotation used to define objects that have a particular role in the application. We saw @Component, who is also a stereotype and it is the most generic one. 
Stereotyped annotated classes can be seen, with some imagination, as "subclasses" of Component. We explain this in a moment.  
Remember the Controller app? We use an annotation, @RestController.
{% highlight java %}
@RestController
public class Hello {

    @RequestMapping("/") 
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
{% endhighlight %}
RestController is a specification, a stereotype, of a component. So classes annotated with @RestController are components, that have a specific role in our application: to define, as the name suggests, a REST controller. We will talk about REST in a specific lesson, for now, we just need to know that a controller is a piece of code that takes in input some information and decides what to do with it and how to present the results.  
@RequestMapping says that in "/" we want to call the controller method index(). The returned value of the method, a string, is the body of the response of the server.  
Let's see now some basic Component stereotypes:
1. @Controller: exposes application functionality as RESTful web services. The @RestController used before is a specialization of @Controller.
2. @Repository: abstract persistence operations, and permits to find, save and delete operations. Simply, @Repository Components deals with CRUD (create, read, update, delete) operations.
3. @Service: this annotation denotes a component that acts as a service. This is used to mark classes as service providers. Services define the functionality provided by the application.  
In the Spring Framework, stereotype annotations are used to define the roles of classes within an application, making the codebase more organized and easy to manage. These annotations serve as a form of metadata that instructs the Spring container on how to handle the components during the application runtime. The most generic stereotype in Spring is the @Component annotation, and all other stereotype annotations, like @Controller, @Service, and @Repository, are specialized subtypes of @Component. Let’s explore each of these annotations in detail, including @RestController.