require 'rails_helper'

RSpec.describe "Pets", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/pet/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/pet/show"
      expect(response).to have_http_status(:success)
    end
  end

end
