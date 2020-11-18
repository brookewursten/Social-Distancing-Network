package com.sdnetwork.controller;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.AccessControlList;
import com.amazonaws.services.s3.model.GroupGrantee;
import com.amazonaws.services.s3.model.Permission;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/upload-image")
public class FileUploadController {
    
    
    
    @PostMapping("/change-profile-picture")
    public void uploadImage(@RequestBody Map<String, String> params) throws IOException {
        
        // get username and raw image base64 string
  		String username = params.get("username");
        String b64 = params.get("b64");
        
        // split base64 into comma separated form and create byte[] object
        String base64Image = b64.split(",")[1];
        byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(base64Image);
        
        // recreate image as bufferedImage object, write it to a file
        BufferedImage img = ImageIO.read(new ByteArrayInputStream(imageBytes));
        File outputFile = new File("image.jpg");
        ImageIO.write(img, "jpg", outputFile);
        
        // get AWS credentials
        AWSCredentials credentials = new BasicAWSCredentials(
                "AKIAI4ATH4XY37FXIMFQ",
                "IM2ji2X88uq6ROgWL9XWpMWaXQXov0Nv7oyx79UC");
        
        // create s3 client object w/ credentials
        AmazonS3 s3client = AmazonS3ClientBuilder
                .standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(Regions.US_WEST_1)
                .build();
    
        // specify which bucket to place image into, as well as directory
        // if directory doesn't exist, it will be automatically created
        String bucketName = "images-project2-kyle";
        String bucketDirectory = "profile-picture/" + username;
        
        // build put object request w/ bucket name, directory, and file
        PutObjectRequest putObjectRequest = new PutObjectRequest(
                bucketName,
                bucketDirectory,
                outputFile);
        
        // use access object to place object into bucket
        AccessControlList acl = new AccessControlList();
        acl.grantPermission(GroupGrantee.AllUsers, Permission.Read); //all users are authenticated
        putObjectRequest.setAccessControlList(acl);
        s3client.putObject(putObjectRequest);
    }
    
    @PostMapping("/new-post")
    public void uploadPostImage(@RequestBody Map<String, String> params) throws IOException {
    
        String postId = params.get("postId");
        String b64 = params.get("b64");
        
        // create s3 directory /posts/postId
    
        String base64Image = b64.split(",")[1];
        byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(base64Image);
    
        // recreate image as bufferedImage object, write it to a file
        BufferedImage img = ImageIO.read(new ByteArrayInputStream(imageBytes));
        File outputFile = new File("image.jpg");
        ImageIO.write(img, "jpg", outputFile);
    
        // get AWS credentials
        AWSCredentials credentials = new BasicAWSCredentials(
                "AKIAI4ATH4XY37FXIMFQ",
                "IM2ji2X88uq6ROgWL9XWpMWaXQXov0Nv7oyx79UC");
    
        // create s3 client object w/ credentials
        AmazonS3 s3client = AmazonS3ClientBuilder
                .standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(Regions.US_WEST_1)
                .build();
    
        // specify which bucket to place image into, as well as directory
        // if directory doesn't exist, it will be automatically created
        String bucketName = "images-project2-kyle";
        String bucketDirectory = "posts/" + postId;
    
        // build put object request w/ bucket name, directory, and file
        PutObjectRequest putObjectRequest = new PutObjectRequest(
                bucketName,
                bucketDirectory,
                outputFile);
    
        // use access object to place object into bucket
        AccessControlList acl = new AccessControlList();
        acl.grantPermission(GroupGrantee.AllUsers, Permission.Read); //all users are authenticated
        putObjectRequest.setAccessControlList(acl);
        s3client.putObject(putObjectRequest);
        
    }
    
}
