package com.dlopez.test.springbackend.util;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.List;

import com.dlopez.test.springbackend.models.entities.Address;
import com.dlopez.test.springbackend.models.entities.Client;
import com.opencsv.CSVWriter;

public class Utility {

    public static byte[] generateCsvReport(List<Client> clients) {
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream();
                CSVWriter csvWriter = new CSVWriter(new OutputStreamWriter(baos))) {

            String[] headers = { "ID", "Username", "Name", "Lastname", "Email", "Phone", "Identification",
                    "Addresses" };
            csvWriter.writeNext(headers);

            for (Client client : clients) {
                String formattedAddresses = formatAddresses(client.getAddresses());
                String[] data = {
                        String.valueOf(client.getId()),
                        client.getUsername(),
                        client.getName(),
                        client.getLastname(),
                        client.getEmail(),
                        client.getPhone(),
                        client.getIdentification(),
                        formattedAddresses
                };
                csvWriter.writeNext(data);
            }

            csvWriter.flush();
            return baos.toByteArray();

        } catch (IOException e) {
            e.printStackTrace();
            return new byte[0];
        }
    }

    private static String formatAddresses(List<Address> addresses) {
        StringBuilder formattedAddresses = new StringBuilder();
        for (Address address : addresses) {
            formattedAddresses.append("Street: ").append(address.getStreet())
                    .append(", Number: ").append(address.getNumber())
                    .append("; ");
        }
        return formattedAddresses.toString();
    }
}
