<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="SpotifyToYoutube._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

<script src="./Javascript/Config.js"></script>
<script src="./Javascript/Spotify.js"></script>


<asp:Panel ID="pnlConnect" runat="server">
    <asp:Button runat="server" ID="btnConnectToSpotify" Text="Click to sign into spotify" OnClientClick="Spotify(); return false;" />
</asp:Panel>
</asp:Content>
