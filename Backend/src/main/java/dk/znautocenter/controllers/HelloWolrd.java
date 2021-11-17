package dk.znautocenter.controllers;


import dk.znautocenter.DbManager.DBManager;
import dk.znautocenter.pojo.User;
import org.json.simple.JSONObject;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/Dashboard")
public class HelloWolrd {


    @Path("/helloWorld")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public JSONObject post(User user){
        try{
            System.out.println(user);
            DBManager.getInstance().insertUser(user.getUsername(),user.getPassword());
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Username",user.getUsername());
            jsonObject.put("Password",user.getPassword());
            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }

    }

    @Path("/helloWorld")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)

    public JSONObject get(@QueryParam("username") String username, @QueryParam("password") String password){
        try{

            User user = DBManager.getInstance().getUser(username, password);
            JSONObject jsonObject = new JSONObject();
            if (user == null){
                jsonObject.put("Userfound", false);
                jsonObject.put("error", "user not found");
                return  jsonObject;
            }
            jsonObject.put("Userfound", true);

            jsonObject.put("Username",user.getUsername());
            jsonObject.put("Password",user.getPassword());
            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }
    }





}
